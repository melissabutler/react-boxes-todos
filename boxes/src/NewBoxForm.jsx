import React, { useState } from "react";


const NewBoxForm = ({addBox}) => {
    const initialState = {
        color: "",
        width: "",
        height: "",
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange= (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input 
            id="color"
            type="text"
            name="color"
            placeholder="Box Color"
            value={formData.color}
            onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input 
            id="height"
            type="text"
            name="height"
            placeholder="Box Height"
            value={formData.height}
            onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input 
            id="width"
            type="text"
            name="width"
            placeholder="Box width"
            value={formData.width}
            onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;