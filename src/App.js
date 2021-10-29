import React, {useState} from 'react'
import "@fontsource/rubik"
import Header from "./components/Header";
import axios from 'axios'
import Body from './components/Body';
import styled from '@emotion/styled'
import Map from './components/Map'




const  App = () => {
 
  const [text, setText] = useState('');
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




// useEffect(() => {

// const handleFlyTo = () => {
// const {current = {} } = mapRef;
// const {leafletElement: map} = current;
// map.flyTo([ip.location.lat, ip.location.lng],14,{
//   duration:3
// })
// }
// handleFlyTo()
// },[ip])


const fetchIpInfo = async (e) => {
      e.preventDefault();
    try{
      
      
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_CItcF4xV81uiAgyXnT0SqLwJLNXNA&ipAddress=${text}`);
      setIp(response.data);
      console.log(response.data)
     
    }catch(error){
      console.log(error)
    }
 
  }






  return (
    <Container>
      <Header text={text} setText={setText} fetchIpInfo={fetchIpInfo} ip={ip} setIp={setIp}  />
        <Body ip={ip}/>
        <Map lat={ip.location.lat} lng={ip.location.lng} />
    </Container>
  );

}
export default App;

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center
`