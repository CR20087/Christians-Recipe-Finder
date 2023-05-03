import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./Components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Christian's Recipe finder</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter> 
    </div>
  ); // Logo is the name of my app displayed in the top left of the app. When clicked on it directs the user to '/' which in my pages component, is the Home Page.
} //This is designing the app and importing all the different components from other files, i also import my logo and link it to my homepage ('/') because i havent done that within any of the other components I imported 

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
` // Text decoration and Fon of Lobster two, for my logo
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`;

export default App;
