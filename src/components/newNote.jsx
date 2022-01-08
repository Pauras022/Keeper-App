import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { Tune } from "@material-ui/icons";

function NewNote(props) {
    const [note, setnote] = useState({
        title: "",
        content: ""
    });
    const [clicked,setclicked] = useState(false);

    function inputHandler(event) {
        const { name, value } = event.target;
        setnote(prevVal => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    function clickHandler(){
        setclicked(true);
    }

    return <div >
        <form className="create-note">
            <input type={clicked ? "text" : "hidden"} placeholder="Title" onChange={inputHandler} name="title" value={note.title} />
            <textarea type="text" placeholder="Content" onClick={clickHandler} onChange={inputHandler} name="content" value={note.content} rows={clicked ? "3" : "1"}/>
            <Zoom in={clicked}>
                <Fab onClick={(event) => {
                    props.addNote(note.title, note.content);
                    setnote({ title: "", content: "" })
                    event.preventDefault();
                }}><AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>
}

export default NewNote;