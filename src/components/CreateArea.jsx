import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [note, setNote] = useState({
    title : "",
    content : ""
  });
  

  function handleChange(event){
    const {name, value}= event.target;
    setNote(prevNote =>{
      return {
      ...prevNote,
      [name] : value
      }
    })
  }
  

  function handleClick(event){
    props.onAdd(note);
    setNote({
      title : "",
      content : ""
    })
    event.preventDefault();
    
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows="2" />
        <Zoom in={true}>
          <Fab color="primary" variant="extended" onClick={handleClick} >Add</Fab>
        </Zoom>
      </form>
    </div>
  );
} 

export default CreateArea;
