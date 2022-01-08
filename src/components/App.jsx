import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes";
import NewNote from "./newNote"

function App(){

    const[notesdata,setnotes]=React.useState(notes);
    let key = notesdata.length;

    function deleteNote(id){
        setnotes((prevVal)=>{
            return prevVal.filter((ele)=>{
                return ele.key !== (id);
            })
        })
    }

    function addNote(title,content){
        setnotes(prevVal=>{
            key++;
            return [...prevVal,{
                key:key,
                title:title,
                content:content
            }]
        })
    }

    return <div>
        <Header />
        <NewNote addNote={addNote}/>
        {notesdata.map(x => (
            <Note
            key={x.key}
            id={x.key}
            title={x.title}
            content={x.content}
            deleteNote={deleteNote}
             />
        ))}
        <Footer />
    </div>
}

export default App