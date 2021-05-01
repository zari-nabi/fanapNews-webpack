import React from "react";

const Toggler = ({ onClick }) => {
    return (
        <>
            <span className="text-switch">روشن</span>
            <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round" onClick={onClick} />
            </label>
            <span className="text-switch"> تیره</span>
        </>
    )
};

export default Toggler;