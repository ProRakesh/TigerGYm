import "./Navbar.css"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgClose, CgMenu } from 'react-icons/cg';
import { useState } from "react";
const Navbar = () => {
    const [Menu,setMenu] = useState(false)
  return (
    <>
    <div className="navbar">
        <nav className="nav">
        <div className="leftnav">
            <img src={logo} alt="logo" />
            <span>TigerGym</span>
        </div>
        <div className="midnav">
        <ul className={Menu===false?"navmenu ":"navmenu navclose"} onClick={()=>setMenu(!Menu)}>
<li className="navlink">Home</li>
<li className="navlink">PortFolio</li>
<li className="navlink">Blog</li>
<li className="navlink">Shop</li>
<li className="navlink">Events</li>




        </ul>
       
        </div>
        <div className="lastnav">
        <span className="cart"><FaShoppingCart/><span> 0</span></span>
        <span className="phoneicon"><BsFillTelephoneFill/></span>
<div className="menuholder">
<span className={Menu===false?"menubar":"closemenu"} onClick={()=>setMenu(!Menu)}><CgMenu /></span>
<span className={Menu===false?"closemenu":"closebar"} onClick={()=>setMenu(!Menu)}><CgClose /></span>
</div>
        <div className="callheader">
            <span>+912356-425682</span>
            <label >Make a call</label>
            
            
        </div>
        <button className="headerbtn">-- Get In touch</button>
        </div>
        </nav>
    </div>
    
    
    
    </>
  )
}

export default Navbar