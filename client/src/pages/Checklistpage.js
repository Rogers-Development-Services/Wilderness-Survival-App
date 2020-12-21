import React, { useEffect, useState } from "react";
import { Checkbox, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import 'materialize-css';
import "./Checklistpage.css";

function ChecklistItems(props) {
  console.log("checkbox!")

  const [checklist, setChecklist] = useState([])
  // const [ description, setDesciption] = useState([])

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
                icon={<Icon>{data.icon}</Icon>}
                node="div"

              >
                {data.item.map((description, index) => <div key={index}> <Checkbox
                  id={data.category + "Checkbox" + index}
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

