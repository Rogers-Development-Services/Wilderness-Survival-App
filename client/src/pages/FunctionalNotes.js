import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Button, Icon, Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';
import * as localforage from "localforage";
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";
import "./Notes.css";
import Toasts from "../components/FunctionalToast";
// import DisplayNote from "../components/displayNote";

function FunctionalNotes() {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [submitButton, setSubmitButon] = useState(true);
    const [noteIndex, setNoteIndex] = useState(-1);
    const [allNotes, setAllNotes] = useState([]);
    const [pTag, setPTag] = useState("show");
    const [textArea, setTextArea] = useState(null);

    const {
        isAuthenticated,
        loading,
        user
    } = useAuth0()


    useEffect(
        function () {
            getSavedNotes();
            // This function checks whether the user is authenticated on page load
            const getUserInfo = async () => {
                console.log(isAuthenticated);
            };

            if (!loading) {
                getUserInfo();
            };

            if (title.length > 0 && note.length > 0) {
                // console.log(title + " and " + note + " changed");
                setSubmitButon(false);
            }
        },
        [loading, isAuthenticated, title, note]
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
                console.log('Note Saved Succesffuly', results)
                setTitle("")
                setNote("")
                console.log("this is a verification check.", title, note)
                getSavedNotes()
            })
    }

    // On click for delete button
    const handleClick = e => deleteNote(e.target.id);
    // Build record & send API delete request
    const deleteNote = (noteID) => {
        let record = { _id: noteID }
        API.deleteNote(record).then(getSavedNotes());
    }

    function getThisUpdatedNote(data) {
        const thisUpdatedNote = allNotes.find(element => element._id === data._id);
        console.log("THIS UPDATED NOTE", thisUpdatedNote);
        return thisUpdatedNote.note;
    };

    function displayFunction() {
        setTextArea("show");
        setPTag(null); //how do I get this to fire using the functionaltoast event
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

    return (
        <div id="user-input" className="container">
            <Row>
                <Col s={12} m={12} l={12}>
                    <h1>Notes</h1>
                    <TextInput
                        s={12}
                        m={12}
                        l={12}
                        icon="subject"
                        label="Write you new note title here"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />

                    <Textarea
                        s={12}
                        m={12}
                        l={12}
                        icon={<Icon>note</Icon>}
                        label="Write you new message here"
                        onChange={e => setNote(e.target.value)}
                        value={note}
                    >
                    </Textarea>

                    <Button
                        className="functional-buttons"
                        id="create-new-note"
                        node="button"
                        type="submit"
                        waves="light"
                        disabled={submitButton}
                        onClick={createNewNote}
                    >
                        Submit
            <Icon right>send</Icon>
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col s={12} m={12} l={12}>
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
                                        { pTag ? (<p id={data._id}>{data.note}</p>) : null}
                                        { textArea ? (
                                            <Row>
                                                <Col s={12} m={12} l={12}>
                                                    <Textarea
                                                        s={12} m={12} l={12}
                                                        defaultValue={data.note}
                                                        iconClassName={"update-note"}
                                                        onChange={
                                                            (event) => {
                                                                console.log(data);
                                                                let n = allNotes;
                                                                console.log("This is the note being updated: \n", data._id);

                                                                const index = n.findIndex((element) => element._id === data._id);
                                                                console.log("Index of note in allNotes state being change in Text Area: \n", index);

                                                                n[index].note = event.target.value;
                                                                console.log("The current object of the n'th object in allNotes with a modified note: \n", n[index]);
                                                                setAllNotes(n);
                                                                setNoteIndex(index);
                                                            }
                                                        }
                                                    >

                                                        <Toasts
                                                            noteId={data._id}
                                                            noteTitle={data.title}
                                                            noteMessage={getThisUpdatedNote(data)} // <--- This is not passing through the new modified note, it sends the old note body
                                                        />

                                                    </Textarea>
                                                </Col>
                                            </Row>
                                        ) : null}
                                        <Row className="btn-row">
                                            <Col className="btn-col">
                                                <Button
                                                    className="functional-buttons offset-s6"
                                                    id={data._id}
                                                    node="button"
                                                    type="submit"
                                                    waves="light"
                                                    onClick={handleClick}
                                                >
                                                    Delete
                                                    <Icon right>delete</Icon>
                                                </Button>
                                            </Col>

                                            <Col className="btn-col">
                                                <Button
                                                    className="functional-buttons"
                                                    id="update-note"
                                                    node="button"
                                                    type="submit"
                                                    waves="light"
                                                    onClick={displayFunction}
                                                >
                                                    Update
                                                    <Icon right>create</Icon>
                                                </Button>
                                            </Col>
                                        </Row>

                                    </CollapsibleItem>
                                )
                                )
                            ]
                        }
                    >
                    </Collapsible>
                </Col>
            </Row>



        </div>
    );
}

export default FunctionalNotes;