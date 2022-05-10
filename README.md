# Frontend Mentor - IP Address Tracker solution

This is a solution to the [IP Address Tracker Challenge](https://www.frontendmentor.io/challenges/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
 

## Overview

### The challenge
I created this website without following a specific tutorial. I was given a design from Frontend-Mentor and implemented the functionality on my own.

Frontend Mentor requirements:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See information about IP addresses entered
- See location of server on a map.


### Links

- Live Site URL: [github pages](https://emday4prez.github.io/ip-address-tracker/)

## My process

### Built with
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library
- [Leaflet](https://react-leaflet.js.org/) 
- [Styled Components](https://styled-components.com/)



### What I learned

I learned a ton about maps and react-leaflet.


```js
 <MapContainer  center={position} zoom={9} scrollWheelZoom={false}  style={{height: '100%'}} whenCreated={setMap} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
   
  </Marker>
</MapContainer>
```


### Continued development

I would like to earn more experience working with APIs and state in React.

### Useful resources

- [Famous IP Addresses](https://gist.github.com/pbojinov/9732278)
- [React Leaflet Docs](https://react-leaflet.js.org/docs/start-setup/) 

## Author

- Website - [Emerson Day](https://portfolio-emday4prez.vercel.app/)
- Frontend Mentor - [@emday4prez](https://www.frontendmentor.io/profile/emday4prez)
- Twitter - [@emers0n](https://www.twitter.com/emers0n)



## Acknowledgments

Thank you to the React-Leaflet team for anwsering my questions. 
