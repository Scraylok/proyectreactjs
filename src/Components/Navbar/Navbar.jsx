import React from "react";
import "./Styles.css";
import kaizenLogo from "../../Assests/Kaizen.png"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const itemsNav =  [

    {
        Id:1,
        path: '/',
        name:"Home",
        
    },
    {
        id:2,
        path: '/category/Monedas',
        name:"Monedas",
        
    },
    {
        id:3,
        path: '/category/Juegos',
        name:"Juegos",
        
    },
    {
        id:4,
        path: '/category/Skins',
        name:"Skins",
    },
    {
        id:5,
        path: '/category/Merchandising',
        name:"Merchandising",
    },


]

const Navbar = () => {
    return (
        <div className="nav">
            <img className="nav-logo" src={kaizenLogo} alt="Kaizen logo" />
           
          
        
            
            <div className="nav-items">

            {itemsNav.map((catnav)=> (
                <Link className="nav-item" key={catnav.id}  to={catnav.path}>{catnav.name}</Link>

            ))}
            </div>
            <Link className="nav-item" to='Cart'> <CartWidget/> </Link>
            
        </div>

    )
}
export default Navbar