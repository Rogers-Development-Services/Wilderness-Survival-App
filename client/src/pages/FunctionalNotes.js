import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import API from "../utils/API";
import "./Notes.css";
// import DisplayNote from "../components/displayNote";

function Notes() {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [allNotes, setAllNotes] = useState([]);
    const [textArea, setTextArea] = useState(null);

    useEffect(
        function() {
            getSavedNotes();
        },
        []
    );

    const createNewNote = () => {
        let record = {
            title: title,
            note: note,
        }
        console.log("saveNotecall", record);

        API.createNote(record)
            .then(results => {
                console.log("note saved.", results)
                getSavedNotes()
            })
    }

    // when a user logs in with their account this is the page, their saved notes will render on page load
    const getSavedNotes = () => {
        API.getNotes()
            .then(results => {
                setAllNotes(results.data)
            })
    }

    return (
        <div id="user-input" className="container">
            <h1>Notes</h1>
            <p>Title</p>
            <TextInput
                icon="subject"
                placeholder="Write you new note here"
                onChange={e => setTitle(e.target.value)}
            />

            <p>Message</p>
            <Textarea
                icon={<Icon>note</Icon>}
                onChange={e => setNote(e.target.value)}
            >
            </Textarea>

            <Button
                id="make-new"
                node="button"
                type="submit"
                waves="light"
                onClick={createNewNote}
            >
                Submit
            <Icon right>send</Icon>
            </Button>

            <Collapsible
                accordion
                popout
                children={
                    [
                        allNotes.map(data => (
                            <CollapsibleItem
                                expanded={false}
                                header={data.title}
                                node="div"
                            >
                                <p>{data.note}</p>
                                {/* {textArea
                                    ? <Textarea defaultValue={data.note}></Textarea>
                                    : null} */}
                                <Button
                                    id="make-new"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                // onClick={saveNote}
                                >
                                    Delete
                                    <Icon right>delete</Icon>
                                </Button>

                                <Button
                                    id="make-new"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    // onClick={setTextArea("show")}
                                >
                                    Update
                                    <Icon right>create</Icon>
                                </Button>
                            </CollapsibleItem>
                        )
                        )
                    ]
                }
            >
            </Collapsible>

        </div>
    );
}

export default Notes;