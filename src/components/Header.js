import React from 'react'
import "@fontsource/rubik"

import styled from '@emotion/styled'
import bg from '../images/pattern-bg.png'
import Search from './Search'

const breakpoints = [500, 992, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const Head = styled.div`
background-image:url(${bg});
width:100vw;
height:333px;
background-size: cover;
display:flex;
align-items:center;
flex-direction:column;

${mq[1]}{
 height:280px;
}
`

const H1 = styled.h1`
      font-family: "Rubik";
      color: white;
      margin:0;
      padding:0;
      text-align:center;
      padding:1.5rem;
      font-size:1.75rem;
      

      ${mq[1]}{
 font-size:2rem;
}
`

const Header = ({text, setText, fetchIpInfo, loading, setLoading}) => {
 return (
  <>
   <Head>
    <H1 >IP Address Tracker</H1>
    <Search text={text} setText={setText} fetchIpInfo={fetchIpInfo} loading={loading} setLoading={setLoading}/>
   </Head>
  </>
 )
}

export default Header
