import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Importing all relevant tools and process, for this component it imports icons for the cuisine buttons

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
        </SLink> 
        <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
        </SLink> 
        <SLink to={"/cuisine/Chinese"}>
        <GiChopsticks /* I Was going to orginally be Japanese but ran into errors of the cusine not loading 
        Japanese related Recipes. So I checked the API's cusine information for their supported cusines
        and whislt Japanese was supported it still wasnt working, so I swapped the cusine to Chinese whihc I
        tested and works correctly  */
        />
        <h4>Chinese</h4>
        </SLink> 
    </List>
  );
}

/* Creates the category fuction. Function Category returns... Everything is wrapped in a 'List' tag 
which apply List's attributes which a mainly styling related attributes. Each cuisine is wrapped in a
'SLink' which navigates the user to said link and also applys styling attributes. Each icon e.g. 
<GiChopSticks/>is within each cuisine individual SLink tag and adds the select icon to that button. 
Each h4 tag displays said text (the cuisine) */ 

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

// Adding said attributes to anything within the 'List' tag

`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: right;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131 );
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: white;
    }
    h4 {
      color: white;
    }
  }

  // Adding said Styling attributes to any said tags

`;
export default Category