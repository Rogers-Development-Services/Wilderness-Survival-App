import React from "react";
import Login from "../components/Login"
import loginButton from "../components/Login";
import { Carousel } from 'react-materialize';


function Home() {
  return (
    <div>
      <h1></h1>
      <Carousel
        carouselId="Carousel-2"
        images={[
          'https://picsum.photos/200/300?image=0',
          'https://picsum.photos/200/300?image=1',
          'https://picsum.photos/200/300?image=2',
          'https://picsum.photos/200/300?image=3',
          'https://picsum.photos/200/300?image=4'
        ]}
        options={{
          dist: -100,
          duration: 200,
          fullWidth: false,
          indicators: false,
          noWrap: false,
          numVisible: 5,
          onCycleTo: null,
          padding: 0,
          shift: 0
        }}
      />
    </div>
  );
}

export default Home;