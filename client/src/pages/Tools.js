import React, { useEffect, useState } from "react";
import "./Tools.css";
import { Carousel, Button, Icon, Collapsible, CollapsibleItem, Select, Row } from 'react-materialize';
import CustomAnimalModal from "../components/customAnimalModal";
import CustomPlantModal from "../components/customPlantModal";

let animalJSON = require('../json/animals.json');
let plantJSON = require('../json/plants.json');
let guideJSON = require('../json/tips.json');

function Home() {

  const [animalModal, setAnimalModal] = useState({});
  const [plantModal, setPlantModal] = useState({});
  const [filterArr, setFilterArr] = useState([]);
  const [accordian, setAccordian] = useState('');

  // This filters the specific guides to be rendered by category as accordians, gettin the info from state
  function safteyCategory(guide) {
    if (guide.category === accordian) {
      return guide;
    }
  };

  // event.target.id so the <img> can take in all of the JSON information for each plant
  function onClickFunction(event, organism) {
    if (organism === "animal") {
      setAnimalModal(animalJSON[event.target.id]);
    } else if (organism === "plant") {
      setPlantModal(plantJSON[event.target.id]);
    }
  };

  // When the category is selected the accordian's information will be set in state.
  function showFunction(event) {
    setAccordian(event.target.value);
  };

  // When accordian re renders this filter will run
  useEffect(
    function () {
      setFilterArr(guideJSON.filter(safteyCategory));
    },
    [accordian]
  );

  return (
    <div className="container">
      <h1>Tools</h1>
      <Row>
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
                  id={data.id}
                  onClick={(event) => {
                    onClickFunction(event, "animal")
                  }}
                  style={{
                    background: `url(${data.image})`, padding: "0",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "8px"
                  }}
                >
                </Button>
              )]}
          carouselId="Carousel-2"
          options={{
            dist: -100,
            duration: 200,
            fullWidth: false,
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
                  id={data.id}
                  href="#Modal-1"
                  node="button"
                  className="modal-trigger"
                  onClick={(event) => {
                    onClickFunction(event, "plant")
                  }}
                  style={{
                    padding: "0",
                    background: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "8px"
                  }}
                >
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
          style={{ width: "100px" }}
        />

        <h2>Guides</h2>

        <Select
          className="bob"
          id="Select-9"
          multiple={false}
          onChange={showFunction} //The change event will have the information from the option tag I want to target
          options={{
            classes: 'white',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value=""
          style={{ marginBottom: "20px" }}

        >
          <option
            disabled
            value=""
          >Choose your Guide</option>
          <option value="Sustinance">Sustinance</option>
          <option value="Shelter">Shelter</option>
          <option value="Saftey">Saftey</option>
          <option value="First-Aid">First-Aid</option>
        </Select>

        <Collapsible
          accordion
          popout
          children={
            [
              filterArr.map(data => (
                <CollapsibleItem
                  expanded={false}
                  header={data.title}
                  icon={<Icon>{data.icon}</Icon>}
                  node="div"
                >
                  <p>{data.description}</p>
                  <p>{data.notes}</p>
                </CollapsibleItem>
              )
              )
            ]
          }
        >
        </Collapsible>
      </Row>

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

    </div >
  );
}

export default Home;