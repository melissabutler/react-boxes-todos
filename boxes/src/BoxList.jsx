import React, { useState } from "react";
import Box from "./Box.jsx"
import NewBoxForm from "./NewBoxForm.jsx";
import {v4 as uuid} from "uuid";
import { jsx } from "react/jsx-runtime";


const BoxList = () => {
    const initialState = [
        { id: uuid(), backgroundColor: "white", height: "10", width:"10"}
    ]

    const [boxes, setBoxes] = useState(initialState)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <h1>Boxes</h1>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box => 
                <Box 
                id={box.id} 
                color={box.color} 
                height={box.height} 
                width={box.width} 
                key={box.id}
                handleRemove={removeBox}
                /> 
                )}
            </div>
        </div>
    )
}

export default BoxList;