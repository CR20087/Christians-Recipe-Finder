import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

// Imports all relevant tools and processes.

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=24`
      );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return ( 
  <Grid // Anything within the grid tag has theese transiton values applied to them when they load. trasition: For 0.5s go from opacity 1(intial) to 0 to 1(exit). Also provides the broswer that the recipes are in a sectioned grid (Rows,columns), so they are easily read and not inside eachother.
  animate={{ opacity: 1 }}
  initial={{ opacity: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  >
    {cuisine.map((item) => {
        return(
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
             <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
            </Card>
        ); // Links any reacipe cards within the selected cuisine to take the user to "/recipe/ + item.id" page.
      })}
  </Grid>
 );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`; // Anything within the grid tag has this styling applied to it 
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
    padding: 1rem;
  }
`;

export default Cuisine;