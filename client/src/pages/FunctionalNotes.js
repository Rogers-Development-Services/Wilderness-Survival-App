import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Button, Icon, Collapsible, CollapsibleItem, Toast } from 'react-materialize';
import API from "../utils/API";
import "./Notes.css";
import Toasts from "../components/Toasts";
// import DisplayNote from "../components/displayNote";

function FunctionalNotes() {
    // console.log("rendered");

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [allNotes, setAllNotes] = useState([]);
    const [pTag, setPTag] = useState("show");
    const [textArea, setTextArea] = useState(null);


    useEffect(
        function () {
            getSavedNotes();
        },
        []
    );

    // when a user logs in with their account this is the page, their saved notes will render on page load
    const getSavedNotes = () => {
        API.getNotes()
            .then(results => {
                setAllNotes(results.data)
            })
    }

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

    const updateNote = () => {
        setPTag("show");
        setTextArea(null);
    }

    const deleteNote = () => {

    }

    function displayFunction() {
        setTextArea("show");
        setPTag(null);
    };

    function test() {
        console.log("work");
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
                placeholder="Write you new note message here"
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
                                { pTag ? (<p>{data.note}</p>) : null}
                                { textArea ? (
                                    <Textarea
                                        defaultValue={data.note}
                                        iconClassName={"update-note"}
                                        >
                                        <Toasts
                                            noteId = {data._id}
                                            noteTitle = {data.title}
                                            noteMessage = {data.note}
                                            // updateNoteFunction = {updateNote}
                                            // getSavedNotesFunction = {getSavedNotes}
                                        />
                                        {/* <Button
                                            id="make-new"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                            onClick={updateNote}
                                        >
                                            Save
                                            <Icon right>save</Icon>
                                        </Button> */}
                                    </Textarea>) : null}
                                <Button
                                    id="make-new"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    onClick={deleteNote}
                                >
                                    Delete
                                    <Icon right>delete</Icon>
                                </Button>

                                <Button
                                    id="make-new"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    onClick={displayFunction}
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

export default FunctionalNotes;