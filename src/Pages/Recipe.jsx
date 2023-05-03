import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
   ); // Fetches the recipe details from Spoonacular the ${params.name} is the name of the required information to be fetched. /information/ means its search the information area of the api database.
    const detailData = await data.json();
    setDetails(detailData)
    console.log(detailData)
  };

  useEffect(() => {
    fetchDetails();
// eslint-disable-next-line
  }, [params.name]);

  return (
  <DetailWrapper>
    <div>
      <h2 // h2 is a display command. Within this command i'm displaying the title of the recipe from the details category of the Api fetch 
      >{details.title}</h2>
      <img src={details.image} alt="" // the image's source is the recipe's image extracted from the details category of the APi fetch.
      />
    </div>
    <Info>
      <Button 
      className={activeTab === 'instructions' ? 'active' : ''} //Setting the variable activeTab as instructions if (the question-mark '?') its active else (the colon ':')set it to nothing
      onClick={() => setActiveTab("instructions")}
      >
        Instructions
        </Button>
      <Button 
      className={activeTab === 'ingredients' ? 'active' : ''} //Also setting the variable activeTab as ingredients if its active else nothing.
      onClick={() => setActiveTab("ingredients")}
      >
        Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
          <div>Ready in minutes?</div>
          <h3 dangerouslySetInnerHTML={{__html: details.readyInMinutes }}></h3>
          <div>Servings?</div>
          <h3 dangerouslySetInnerHTML={{__html: details.servings }}></h3>
          <div>Diet Information?</div>
          <h3 dangerouslySetInnerHTML={{__html: details.diets }}></h3>
          <h2>Credits:</h2>
          <h3 dangerouslySetInnerHTML={{__html: details.creditsText }}></h3>
          <h3>& Spoonacular API</h3>
        </div>
        // If the ActiveTab variable is instructions then dislpay summary & instructions details imported from the details catgory of the Api fetch.
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient) => ( 
          <li key={ingredient.id}>{ingredient.original}</li>
          // If the ActiveTab is ingredients then display the 'extended ingredients', on a seperate line per ingredient, sourced from the details category of that recipe.
          ))} 
        </ul>
        )} 
    </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
// Stying for all of the designated tags
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
` // colouring for the Ingredients and instructions, buttons.
const Info = styled.div`
  margin-left: 10rem;
` // All the info have a margin of 10rem
export default Recipe