import React from 'react'
import styled from '@emotion/styled'
import "@fontsource/rubik"

import arrow from '../images/icon-arrow.svg'






const breakpoints = [992, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)
const SearchContainer = styled.form`
margin-top:10px;
  position: relative;
  text-align:center;
  border:none;
  box-shadow:0 20px 50px rgba(0, 0, 0, 0.2);
`
const SearchBox = styled.input`
  width:75vw;
  border: none;
  padding: 0 15px;
  height:66px;
 
  border-radius:.75rem;
  font-family: "Rubik";
  font-size: 1.15rem;
  font-weight: 500;

  ${mq[0]}{
 width:36vw;
}
`
const SearchButton = styled.button`
  background: black;
  position:absolute;
  top:0;
  bottom:0;
  right:0; 
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 0 .75rem .75rem 0;
  height:66px;
  width:63px;

  &:hover{
   cursor: pointer;
   background: hsl(0, 0%, 17%)
  }
`

const Search = ({text, setText, fetchIpInfo}) => {


const onChange = (event) => {
    setText(event.target.value);
  };


 return (
  <SearchContainer>
    <SearchBox type="text"  placeholder="Enter an IP Address"  value={text} onChange={onChange} />
    <SearchButton type="submit" onClick={fetchIpInfo}>
       <img src={arrow} alt='arrow'/> 
    </SearchButton>
    
  </SearchContainer>
 )
}

export default Search
