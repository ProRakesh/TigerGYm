import "./Footer.css"
import footer from "../../assets/footer.png"
import {AiTwotonePhone} from "react-icons/ai"

const Footer = () => {
  return (
    <><div className="Footer">
      <div className="leftfooter">
        <div className="aboutlogo">
          <img src={footer} alt="logo" />
            <span>TigerGym</span>
            </div>

            <p>Lorem Ipsum is simply dummied text of the printing and industry.</p>
     <div className="callfooter">

      <span>GET US SUPPORT</span>
      <span>+1800-208-6835
      <label  className="phoneicons"><AiTwotonePhone/></label>  </span>
     </div>

      </div>

      <div className="midfooter">
<span>
Useful Links
</span>
<div className="links">
  <li>Home</li>
  <li>About</li>
  <li>Portfolio</li>
  <li>Blog</li>
  <li>Contact</li>
  </div>
      </div>
      <div className="rightfooter">
<span>Conatct </span>
<img src="http://gymster.peacefulqode.com/wp-content/uploads/2020/11/Map-png.png" alt="" />
      <p>
      Neher Road,Jodhpur,Rajasthan,India-342001
      </p>
      </div>
      
      
      
      
      </div></>
  )
}

export default Footer