import React from "react";

function DisplayNote(props) {

    return (
        <div className={'note-div'}>
            <p className={'note-title'}>{props.note.title}</p>
            <p className={'note-body'}>{props.note.note}</p>
            <button>Update Note</button>
            <button>Delete Note</button>
        </div>)

}

export default DisplayNote;