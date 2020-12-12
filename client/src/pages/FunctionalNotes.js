import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import { useAuth0 } from '@auth0/auth0-react';
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

    const {
        isAuthenticated,
        loading,
        user
    } = useAuth0();

    useEffect(
        function () {
            getSavedNotes();
            // This function checks whether the user is authenticated on page load
            const getUserInfo = async () => {
                console.log(isAuthenticated);
            };
            if (!loading) {
                getUserInfo();
            }
        },
        [loading, isAuthenticated]
    );

    // when a user logs in with their account this is the page, their saved notes will render on page load
    const getSavedNotes = () => {
        API.getNotes(user.sub)
            .then(results => {
                setAllNotes(results.data)
            })
    }

    const createNewNote = () => {
        let record = {
            userID: user.sub,
            title: title,
            note: note,
        }
        console.log("saveNotecall", record);

        API.createNote(record)
            .then(results => {
                console.log('Note Saved Succesffuly')
                getSavedNotes()
            })
    }

    const updateNote = () => {
        setPTag("show");
        setTextArea(null);
    }

    // const deleteNote = () => {

    // }

    function displayFunction() {
        setTextArea("show");
        setPTag(null);
    };
    
    function localstuff() {
        //local forage
        localforage.setItem("userNotes", allNotes, function (err) {
            // console.log(localforage)
            // console.log("data: " + allNotes)
            
            // if err is non-null, we got an error
            localforage.getItem("userNotes", function (err, allNotes) {
                // console.log(localforage)
              // if err is non-null, we got an error. otherwise, value is the value
            });
          });
    }

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