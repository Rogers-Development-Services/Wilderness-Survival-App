import React, { useState } from "react";
import "./Tools.css";
import { Carousel, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import CustomModal from "../components/customModal";

let animalJSON = require('../json/animals.json');
let plantJSON;
let guideJSON = require('../json/tips.json');

function Home() {

  const [animalModal, setAnimalModal] = useState({});
  const [guides, setGuides] = useState({});

  // event.target.id so the <img> can take in all of the JSON information for each plant
  function onClickFunction(event) {
    console.log(event.target);
    setAnimalModal(animalJSON[event.target.id]);
  }

  return (
    <div className="container">
      <h1>Tools</h1>
      <h2>Animals</h2>
      <Carousel

        // -------------------
        // WORKING ASSUMPTION 
        //  ------------------
        // React-Materialize has a class="modal-trigger" and when a button with that class is triggered, the button refrences href="#Modal-0" (this is known as an anchor tag, not to be confused with <a>) which is the id of the CustomModal and renders the modal inside of the button.
        // Also, when the user clicks on the button with the class "modal-trigger", materialize changes the <modal>'s attribute "open={false}". This makes the modal visisble to the user.
        // The <img> is included in the same "children" element to include the acutal picture of the plant or animal we are refrencing. Additionally, when the image in the carosel is clicked, the image of the <img> is translated to the <card> through props and state by using the "onClickFunction" to make the images the same on the button and card.

        children={
          [
            animalJSON.map(data =>
              <Button
                href="#Modal-0"
                node="button"
                className="modal-trigger"
                style={{ padding: "0" }}
              >
                <img
                  id={data.id}
                  onClick={onClickFunction}
                  src={data.image}
                  alt={data.name}
                  style={{ borderRadius: "8px" }}
                />
              </Button>
            )]}
        carouselId="Carousel-2"
        options={{
          dist: -100,
          duration: 200,
          fullWidth: true,
          indicators: false,
          noWrap: false,
          numVisible: 5,
          onCycleTo: null,
          padding: 0,
          shift: 0
        }}
      />

      <h2>Plants</h2>
      <Carousel
        carouselId="Carousel-2"
        images={[
          'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
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

      <h2>Guides</h2>
      <Collapsible
        accordion
        popout
        children={
          [
            guideJSON.map(data =>
              <CollapsibleItem
                expanded={false}
                header={data.title}
                icon={<Icon>filter_drama</Icon>}
                node="div"
              >
                <p>{data.description}</p>
                <p>{data.notes}</p>
              </CollapsibleItem>
            )
          ]
        }
      >
      </Collapsible>

      {/* <Carousel
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
      /> */}

      <CustomModal
        modalImage={animalModal.image}
        modalAltText={animalModal.name}
        modalDescription={animalModal.description}
        modalMap={animalModal.map}
        modalFootprint={animalModal.footprint}
        modalStatus={animalModal.status}
      />

    </div>
  );
}

export default Home;