import "./Offer.css"
import martial from "../../assets/martial.jpg"
import {ImCircleRight} from "react-icons/im"
const Offer = () => {
    return (
        <>
            <div className="offer">
                <div className="leftoffer">

                    <img src={martial} alt="" />

                </div>
                <div className="rightoffer">
                    <span>WHAT WE HAVE <br /> TO OFFER</span>
                    <h1 className="stroke">Best</h1>
                    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. the readable
                        content of a page when looking at its layout.</p>
                    <ul>
                        <li>
                           <ImCircleRight/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li> <ImCircleRight/>Vestibulum vitae tellus in felis egestas lobortis.
                        </li>
                        <li>
                        <ImCircleRight/>  Duis ultrices nunc ac odio efficitur, ut aliquet eros scelerisque.
                        </li>
                        <li><ImCircleRight/>Nunc sagittis libero id turpis ultricies laoreet.</li>
                    </ul>
                    <button className="herobtn">-- Read More</button>

                </div>

            </div>


        </>
    )
}

export default Offer