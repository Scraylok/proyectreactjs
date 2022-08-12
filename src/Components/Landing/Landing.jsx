import React from "react";
import "../Landing/StyleLanding.css";
import KaizenLogo from "../../Assests/Kaizen.png"

const  ItemListContainer = ({Greeting}) => {
    return (
    <div className="landing">
        
        <h1 className="Tittle-landing Tittle-landing-animation">{Greeting}</h1>
        
        <img src={KaizenLogo} alt="Logo" className="Logo-landing heartbeat" />
    </div>
    )
}
export default ItemListContainer