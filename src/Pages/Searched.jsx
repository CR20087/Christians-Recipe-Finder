import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

  const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=24`// 'query' is what i enter into the api request because it is a search for specific items rather than a category of items. 'number' determines how many different recipes are requested  
      );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results); //Setting the variable searched recipes to the data = recipes.results.
    };
    
    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

  return (
    <Grid>
    {searchedRecipes.map((item) => {  // within the searched Recipes variable it sourcing each item and returning a recipe card for each one.
      // Linking each recipe to a recipe card with their image and title.
        return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        ); 
     })}
   </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem; //This is setting up the grid of recipes on the results page. Each recipe card will have a 'grid-gap' of 3rem between one another to make it tidy, spaced-out, and not cluttered.
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
    padding: 1rem;
  }
`; // Generic styling


export default Searched;
