import "./topbar.scss";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




export default function Topbar() {
    return (
        <div className="container">

            {/* <div className="left">
                the social media logol
            </div> */}

            <div className="middle">

                <ul>
                    <li> ABOUT</li>
                    <li>CONTACT</li>
                    <li> WRITE</li>
                    <li>LOGOUT</li>

                </ul>
            </div>


            <div className="right">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}
