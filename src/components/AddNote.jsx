import { useState } from "react"

export default function AddNote({handleAddNote}){
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200

    const handleChange = (event) => {
        const newText = event.target.value;
      
        if (newText.length <= characterLimit) {
          setNoteText(newText);
        }
      };
      
    

    const handleClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText("")
        }
    }

    return (
        <div className="note new">
            <textarea 
                onChange={handleChange} 
                placeholder="Type to add note.." 
                cols="10" 
                rows="8"
                value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}