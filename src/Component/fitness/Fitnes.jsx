import "./Fitnes.css"
import fit1 from "../../assets/fit1.png"
import fit2 from "../../assets/fit2.png"
import fit3 from "../../assets/fit3.png"
import fit4 from "../../assets/fit4.png"
const Fitnes = () => {
    return (
        <>
            <div className="fitness">
                <span>SET HIGH FITNESS GYM</span>
                <span>GOALS</span>
                <label className="goal">GOALS</label>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the readable
                    content of a page when looking at its layout.</p>

                <div className="fitnessprogram">
                    <div className="fit">
                        <img src={fit1} alt="" />
                        <span>MODERN EQUIPMENT
                        </span>
                        <p>Lorem Ipsum is simply dummy text of the printing industry

                        </p>
                    </div>
                    <div className="fit">
                        <img src={fit4} alt="" />
                        <span>TRAINING PLAN

                        </span>
                        <p>Lorem Ipsum is simply dummy text of the printing industry

                        </p>
                    </div>
                    <div className="fit">
                        <img   src={fit2} alt="" />
                        <span>HEALTHY DIET
                        </span>
                        <p>Lorem Ipsum is simply dummy text of the printing industry

                        </p>
                    </div>
                    <div className="fit">
                        <img className="fit4" src={fit3} alt="" />
                        <span>SUCCESS GUARANTED
                        </span>
                        <p>Lorem Ipsum is simply dummy text of the printing industry

                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Fitnes