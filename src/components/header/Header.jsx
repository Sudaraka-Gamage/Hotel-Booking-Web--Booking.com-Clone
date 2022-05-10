import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">

            <div className="headerListItem active">
                <FontAwesomeIcon icon= {faBed} />
                <span>Stays</span>
            </div>
            
            <div className="headerListItem">
                <FontAwesomeIcon icon= {faPlane} />
                <span>Flights</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon= {faCar} />
                <span>Car Rentals</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon= {faBed} />
                <span>Attractions</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon= {faTaxi} />
                <span>Airport taxis</span>
            </div>

         </div>

        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% 
        or more with a free LankaBooking Account</p>
        <button className="headerBtn">Sign in / Register</button>

        
        <div className="headerSearch">

            <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faTaxi}  className="headerIcon"/>
                <input 
                type="text" 
                placeholder="Where are you going?" 
                className="HeaderSearchInput"/>
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faCalendar}  className="headerIcon"/>
                <span className="headerSearchText">date to date</span>
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faPerson}  className="headerIcon"/>
                <span className="headerSearchText">2 Adults 2 Childrens 1 Room</span>
            </div>

        </div>


      </div>
    </div>
  )
}

export default Header