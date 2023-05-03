import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

// Imports all relevant tools and processes

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

// Creates function Search and navigates the user to " /searched/ + (input) " when user presses enter.

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
      <input 
      onChange={(e) => setInput(e.target.value)}
      type="text"
      spellCheck= "true"
      placeholder="Hungry? Search here..." 
      /* Placeholder shows text in lower opactity to input text in search bar 
      When first developing placeholder I tried writing it like:
      if  {/* onchange input => value={input} !!(ignore the /*)!!
  } else { value={"Hungry? Search here..."}
  Which did not work so i used my prior knowlage of resources and knew that the google search bar has the 
  thing im trying to create. So I inspected the search bar and saw that it was written similarly to mine and 
  is had a value called 'placeholder', so i implemented this into my code and it worked.*/
      value={input}
      />
      </div>
    </FormStyle>
  );
  }

// FaSearch is the name of the search bar icon

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  } // Styling and properties for the text input into the search bar
  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  } // Styling 
`
export default Search