import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { BsArrowLeftRight } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
// Importing all relevant processes and tool

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
   }, []);

const getVeggie = async () => {
   const check = localStorage.getItem("Veggie");

   if (check) {
       setVeggie(JSON.parse(check));
   } else {
       const api = await fetch(
           `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
       ); // Preform an API fetch is veggie cannot be found in local storage
       const data = await api.json();

       localStorage.setItem("Veggie", JSON.stringify(data.recipes));
       setVeggie(data.recipes);
       console.log(data.recipes);
   } // Setting a tag called 'Veggie' in local storage so it can be called upon when the page is refreshed to save Api requests count
 };
  return (
    <div>  
            <Wrapper>
                <h3>
                  Our Vegetarean Picks
                  <GiClick />
                  <BsArrowLeftRight />
                  </h3>
                <Splide // (Above) Displaying the title. (below) Giving the splide specific options and conditions 
                options={{
                    perPage: 3,
                    arrows: true,
                    pagination: true,
                    drag: 'free',
                    gap: '5rem',
                    play: 'void'
                }}
                >
                {veggie.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                          <Link to={"/recipe/" + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient />
                            </Link>
                        </Card>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </Wrapper>
    </div>
  )
}

/* Creating a splide (scorllable wheel of recipes) for vegeterian picks and creating the recipe cards
for each recipe (which is wrapped in 'gradient', adds a black gradient to image). 'Link' links everything 
to the recipe page. 'Wrapper' adds generic styling across all things within the tags*/

const Wrapper = styled.div`
 margin: 4rem 0rem; 
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
// Anything wrapped within the 'card' tag will have this styling.
 img {
   border-radius: 2rem;
   position: absolute;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
 } //IMG (image) will have theese styling preferences
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
  }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%; 
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
// Anything within the gradient tag will have this styling.
export default Veggie