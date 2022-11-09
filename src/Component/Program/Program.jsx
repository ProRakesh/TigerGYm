import "./Program.css"
import karate1 from "../../assets/karate.png"
import karate2 from "../../assets/karate2.png"
import karate3 from "../../assets/karate3.png"
const Program = () => {
    return (
        <>
            <div className="programtitle">
                <span>SPECIAL TRAINING</span>
                <span>PROGMAM</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the readable content of a <br /> page when looking at its layout.

                </p>
            </div>

            <div className="serviceprogram">
                <div className="leftservice">
                    <img src={karate1} alt="serviceimg" />
                    <div className="title">
                    <i className="servicenumber">01</i>

                        <span>Kids Karate</span>
                        <p>Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.

                        </p>
                    </div>
                </div>
                <div className="leftservice leftservice-bg">
                    <img src={karate2} alt="serviceimg" />
                    <div className="title">
                        <i className="servicenumber">02</i>
                        <span>SELF DEFENCE</span>
                        <p>Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.

                        </p>
                    </div>

                </div>
                <div className="leftservice ">
                    <img src={karate3} alt="serviceimg" />
                    <div className="title">
                    <i className="servicenumber">03</i>

                        <span>MARTAIL ART</span>
                        <p>Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.

                        </p>
                    </div>




                    {/* </div>
        <div className="leftservice">
<img src={karate1} alt="" />
<div className="title">
    <span>Kids Karate</span>
    <p>Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.

</p>
</div> */}



                    {/* </div>
        <div className="leftservice">
<img src="" alt="" />
<div className="title">
    <span>Kids Karate</span>
    <p>Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.

</p>
</div> */}



                </div>

            </div>


        </>
    )
}

export default Program