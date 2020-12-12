import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";
import "./Notes.css";
// import DisplayNote from "../components/displayNote";

function Notes() {

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

    const trimUDI = () => {
        var uid = user.sub;
        const trimmedUID = uid.slice(6);
        return trimmedUID;
    }

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

    const updateNote = (event) => {
        setPTag("show");
        setTextArea(null);
    }

    // const deleteNote = () => {

    // }

    function displayFunction() {
        setTextArea("show");
        setPTag(null);
    };

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
                                { pTag ? (<p>{data.note}</p>) : null}
                                { textArea ? (
                                    <Textarea
                                        defaultValue={data.note}
                                        // icon={<Icon>save</Icon>}
                                        iconClassName={"update-note"}>
                                        <Button
                                            id="make-new"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                            onClick={updateNote}
                                        >
                                            Save
                                        <Icon right>save</Icon>
                                        </Button>
                                    </Textarea>) : null}
                                <Button
                                    id="make-new"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                // onClick={deleteNote}
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

export default Notes;