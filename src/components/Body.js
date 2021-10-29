import React from 'react'
import styled from '@emotion/styled'


const breakpoints = [500, 992, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)


const Container = styled.div`
width: 330px;
height:280px;
background:white;
display: flex;
flex-direction: column;
text-align:center;
justify-content:center;
align-items:center;
padding:0;
margin:0;
border-radius: .75rem;
position:absolute;
top:200px;
overflow:hidden;
box-shadow:0 20px 80px rgba(0, 0, 0, 0.2);
z-index:3;

${mq[1]}{
 height:120px;
 width: 80vw;
 flex-direction: row;
 justify-content: space-evenly;

 text-align:left;
}
`

const Label = styled.p`
color: darkgray;
font-size:.6rem;
font-weight:800;
padding: 0;
margin: 0;
letter-spacing:.05rem;
margin-bottom:5px;
`
const Info = styled.p`
color:hsl(0, 0%, 17%);
font-size:1.25rem;
font-weight:700;
margin:0;
padding:0;
margin-bottom:20px;

`

const TextContainer = styled.div`

`

const Body = ({ip}) => {
 return (
  <Container>
  <TextContainer>
    <Label>IP ADDRESS</Label>
    <Info>{ip?.ip}</Info>
  </TextContainer>
  <TextContainer>
   <Label>LOCATION</Label>
   <Info>{`${ip?.location.city}, ${ip?.location.region}, ${ip?.location.country} `}</Info>
  </TextContainer>
  <TextContainer>
   <Label>TIMEZONE</Label>
    <Info>{`UTC${ip?.location.timezone}`}</Info>
  </TextContainer>
  <TextContainer>
    <Label>ISP</Label>
   <Info>{ip?.isp}</Info>
  </TextContainer>
  
   
   
  
  </Container>
 )
}

export default Body

