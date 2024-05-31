import React from "react";

const Box = ({ id, handleRemove, height, width, color}) => {
    const remove = () => {
        handleRemove(id)
    }
    return (
        <div>
            <div
            className="Box"
            style={{
                backgroundColor: color,
                height: `${height}em`,
                width: `${width}em`
            }}>

            </div>
            <button onClick={remove}>X</button>
    </div>
    )

}

export default Box;