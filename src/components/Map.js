import React from 'react'
import styled from '@emotion/styled'

import { MapContainer, TileLayer, Marker} from '@monsonjeremy/react-leaflet'


const Leaflet = styled.div`
height:100vh;
width:100vw;
z-index: 1;
margin:0;
box-sizing:border-box;
padding: 0;
`

function Map ({lat, lng, setMap}){
  const position = [lat, lng]
 
 return (
  <Leaflet>
   <MapContainer  center={position} zoom={9} scrollWheelZoom={false}  style={{height: '100%'}} whenCreated={setMap} >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}/>
  </MapContainer>
  </Leaflet>
 )
}

export default Map


