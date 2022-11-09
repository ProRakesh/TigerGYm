import "./Message.css"
import {BiEnvelopeOpen} from "react-icons/bi"
const Message = () => {
  return (
    <>
    <div className="Message">
        
<div className="mess">
<span><BiEnvelopeOpen/></span>

<div className="mestitle">

<span>SIGN UP TO GET LATEST UPDATES
</span>
<p>It is a long established fact that a reader will be distracted by the
</p>
</div>

</div>
<div className="mail">
    <input type="email" placeholder="Email" />
    <button>sign Up</button>
</div>


        </div>
        </>
  )
}

export default Message