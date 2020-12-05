import React, { useEffect, useState } from "react";
import { Checkbox, Collapsible, Icon, CollapsibleItem } from 'react-materialize';
import 'materialize-css';
import "./Checklistpage.css";

// import Checklist from "../json/checklist.json";

function ChecklistItems(props) {
  console.log("checkbox!")

  const [checklist, setChecklist] = useState([])

  const dataupload = () => {
    fetch("checklist.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setChecklist(data)
      })
  }
  useEffect(() => {
    dataupload()
  }, [])

  function onClickFunction(event) {
    console.log(event.target);
    setChecklist(checklist[event.target.id])

  }

  return (
    <div className="container">
      <h1>Wilderness Checklist</h1>
      {props.children}


      <Collapsible
        accordion
        popout
        children={
          [
            checklist.map(data =>
              <CollapsibleItem
                expanded={false}
                header={data.category}
                // icon={<Icon>list</Icon>}
                node="div"


              >
                {data.item.map(description => <div> <Checkbox
                  // checked
                  // filledIn
                  id="Checkbox_3"
                  type="checkbox"
                  label={description}
                  value={description}
         
                /> </div>)}

              </CollapsibleItem>
            )
          ]

        }
      >
      </Collapsible>


    </div>
  );
}

export default ChecklistItems;

