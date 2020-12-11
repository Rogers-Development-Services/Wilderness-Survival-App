import React from "react";
class DisplayNote extends React.Component{
    state={
        id:this.props.note._id,
        note: this.props.note.title,
        noteCreated: this.props.note.noteCreated,
        title: this.props.note.title

    }
    handleInputChange =(event) =>{
        this.state={value: ''};
        this.handleInputChange = this.handleInputChange(this);

    }
    render(){
        return(<div>
           <input type="text" value= {this.state.note} onChange={this.handleInputChange}/>
            {this.state.noteCreated}
            {this.state.title}
            {this.state.id}
            <button>Update Note</button>
            <button>Delete Note</button>
        </div>)
    }
}

export default DisplayNote;