import React, { useState } from "react";
import "./Tools.css";
import { Carousel, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import CustomAnimalModal from "../components/customAnimalModal";
import CustomPlantModal from "../components/customPlantModal";

let animalJSON = require('../json/animals.json');
let plantJSON = require('../json/plants.json');
let guideJSON = require('../json/tips.json');

function Home() {

  const [animalModal, setAnimalModal] = useState({});
  const [plantModal, setPlantModal] = useState({});

  // event.target.id so the <img> can take in all of the JSON information for each plant
  function onClickFunction(event, organism) {
    console.log(event.target);

    console.log(organism);
    if (organism == "animal") {
      setAnimalModal(animalJSON[event.target.id]);
    } else if (organism == "plant") {
      setPlantModal(plantJSON[event.target.id]);
    }
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
                className="modal-trigger animal-carousel-button"
                style={{ background: `url(${data.image})`, flex: "none" }}

              // padding: "0", backgroundSize: "contain", backgroundRepeat: "no-repeat", maxHeight: "100%", flex: "none" 
              >
                {/* <img
                  id={data.id}
                  onClick={(event) => {
                    onClickFunction(event, "animal")
                  }}
                  src={data.image}
                  alt={data.name}
                  style={{ borderRadius: "8px" }}
                /> */}
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
          shift: 0,
        }}
      />

      <h2>Plants</h2>
      <Carousel
        children={
          [
            plantJSON.map(data =>
              <Button
                href="#Modal-1"
                node="button"
                className="modal-trigger"
                style={{ padding: "0" }}>
                <img
                  id={data.id}
                  onClick={(event) => {
                    onClickFunction(event, "plant")
                  }}
                  src={data.image}
                  alt={data.name}
                  style={{ borderRadius: "8px" }} />
              </Button>)
          ]
        }
        carouselId="Carousel-3"
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

      <CustomAnimalModal
        modalImage={animalModal.image}
        modalAltText={animalModal.name}
        modalDescription={animalModal.description}
        modalMap={animalModal.map}
        modalFootprint={animalModal.footprint}
        modalStatus={animalModal.status}
      />

      <CustomPlantModal
        modalPlantImage={plantModal.image}
        modalName={plantModal.name}
        modalInfo={plantModal.info}
        modalUsefullness={plantModal.usefullness}
        modalCaution={plantModal.caution}
      />

    </div>
  );
}

export default Home;