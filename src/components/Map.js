import React, {useEffect, useRef} from 'react'
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

function Map ({lat,lng}){
  const position = [lat, lng]

  const mapRef = useRef();

  useEffect(() => {
    const {current = {} } = mapRef;
    const {leafletElement:map} = current;
  },[mapRef])

 return (
  <Leaflet>
   <MapContainer ref={mapRef} center={position} zoom={9} scrollWheelZoom={false}  style={{height: '100%'}} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    {/* <Popup>
      {name}
    </Popup> */}
  </Marker>
</MapContainer>
  </Leaflet>

  
 )
}

export default Map