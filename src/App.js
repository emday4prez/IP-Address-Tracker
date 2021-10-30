import React, {useState, useEffect} from 'react'
import "@fontsource/rubik"
import Header from "./components/Header";
import axios from 'axios'
import Body from './components/Body';
import styled from '@emotion/styled'
import Map from './components/Map'


const {REACT_APP_IP_KEY} = process.env

const  App = () => {
 
  const [text, setText] = useState('');
  const [map, setMap] = useState(null)
  const [ip, setIp] = useState({
  ip: "8.8.8.8",
  location: {
    city:"Mountain View",
    region: 'California',
    country: 'US',
    timezone: ' -07:00',
    lat: 37.38605, 
    lng: -122.08385,
   
  },
  isp: "Google LLC"
})

useEffect(() => {
const handleSetView = () => {
map?.setView([ip.location.lat, ip.location.lng],9)
}
handleSetView()
},[ip, map])


const fetchIpInfo = async (e) => {
      e.preventDefault();
    try{
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${REACT_APP_IP_KEY}&ipAddress=${text}`);
      setIp(response.data);
    }catch(error){
      console.log(error)
    }
 
  }

  return (
    <Container>
      <Header text={text} setText={setText} fetchIpInfo={fetchIpInfo} ip={ip} setIp={setIp}  />
        <Body ip={ip}/>
        <Map lat={ip.location.lat} lng={ip.location.lng} map={map} setMap={setMap}/>
    </Container>
  );

}
export default App;

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center
`