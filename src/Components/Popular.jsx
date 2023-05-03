import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'

// Importing all relevant tools & processes

function Popular() {
  const [Popular, setPopular] = useState([]);

   useEffect(() => {
     getPopular();
    }, []);

// Creating the 'Popular' function 

 const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
        setPopular(JSON.parse(check));
    } else {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
        );
        const data = await api.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);
    }
  };

/* Const getPopular is either retrieving the popular data from local storage, or preforming an api 
fetch. It checks local storage to be conservative of api fetching as I have limted requests available as 
my selected api plan is free */ 

 return (
   <div>  
            <Wrapper>
                <h3>Popular Picks
                <GiClick />
                <BsArrowLeftRight />
                  </h3> 
                <Splide // Displays tht title 'Popular Picks', applys conditions to to the recipe carousel (Splide)
                options={{ 
                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: 'free',
                    gap: "5rem", 
                }} 
                > 
                {Popular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                          <Link to={"/recipe/" + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} /* Adds the recipe image to each card */ />
                            <Gradient /> 
                            </Link> 
                        </Card>
                        </SplideSlide>
                    ); //SplideSlide is the scrollable recipe wheel on the home page and by creating the recipe card i'm creating them within the scrollable wheel 
                })}
                </Splide>
            </Wrapper>
    </div>
 );
}

/* The 'link' process enable all recipes to be cliked upon and will direct the user to " /recipe/ + (recipe ID) ".
The const Card is each recipe card. The const gradient is applying dark gradient to each recipe card image. 
The const SplideSlide is the name of the wheelthat the recipe cards are scrolled along.*/

const Wrapper = styled.div`
 margin: 4rem 0rem; 
 
 // Adding said attributes to anything within the 'Wrapper' tag

`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative; 
  
  // Adding said attributes to anything within the 'Card' tag

 img {
   border-radius: 2rem;
   position: absolute;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover; 
   
   // Adding said attributes to any image on the recipe cards
 }
 p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center; 

    // Adding said attributes to anything within the 'p' tag
  }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%; 
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)); 

    /* Adding said attributes to anything within the 'Gradient' tag. This is used in the Popular Splide to add a 
    gradient to the images.   */
`

export default Popular;
