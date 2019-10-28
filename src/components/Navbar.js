import React from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-feather';

const Navbar = class extends React.Component {

 render() {
   return (
     <div>
       <div className="tab-menu-container show-xs">
        <div className="tab-menu btn-group btn-group-block">
          <Link className="btn pt-2" activeClassName="active" to="/">
            <Icon.AlertTriangle size={26}/>
            <div>Alerts</div>
          </Link>
          <Link className="btn pt-2" activeClassName="active" to="/map">
            <Icon.Map size={26}/>
            <div>Map</div>
          </Link>
          <Link to="/" className="btn btn-link" title="Logo">
            <img src="/img/small-logo.png" alt="" />
          </Link>
          <Link className="btn pt-2" activeClassName="active" to="/contact">
            <Icon.Phone size={26}/>
            <div>Contact</div>
          </Link>
          <div class="btn dropdown dropdown-right pt-2">
             <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
               <Icon.DollarSign size={26}/>
               <div>Bill Pay</div>
             </a>
             <ul class="menu">
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="https://portal.utilitydistrict.com/5670" target="_blank">
                   Wood Creek
                 </a>
               </li>
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="ttps://portal.utilitydistrict.com/5671" target="_blank">
                   West Laurel
                 </a>
               </li>
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="ttps://portal.utilitydistrict.com/5672" target="_blank">
                   East Laurel
                 </a>
               </li>
             </ul>
           </div>
        </div>
      </div>
      <div className="container grid-xs hide-xs">
        <header className="navbar">
          <section className="navbar-section text-right">
            <Link className="btn btn-link" activeClassName="active" to="/">
              Alerts
            </Link>
            <Link className="btn btn-link" activeClassName="active" to="/map">
              Map
            </Link>
          </section>
          <section className="navbar-center">
            <Link to="/" className="navbar-brand mr-2" title="Logo">
              <img src="/img/small-logo.png" alt="" />
            </Link>
          </section>
          <section className="navbar-section">
            <Link className="btn btn-link" activeClassName="active" to="/contact">
              Contact
            </Link>
            <div class="dropdown">
             <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
               Bill Pay
             </a>
             <ul class="menu">
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="https://portal.utilitydistrict.com/5670" target="_blank">
                   Wood Creek
                 </a>
                 <div class="menu-badge">
                   <Icon.ExternalLink size={16}/>
                 </div>
               </li>
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="ttps://portal.utilitydistrict.com/5671" target="_blank">
                   West Laurel
                 </a>
                 <div class="menu-badge">
                   <Icon.ExternalLink size={16}/>
                 </div>
               </li>
               <li class="menu-item">
                 <a rel="noopener noreferrer" href="ttps://portal.utilitydistrict.com/5672" target="_blank">
                   East Laurel
                 </a>
                 <div class="menu-badge">
                   <Icon.ExternalLink size={16}/>
                 </div>
               </li>
             </ul>
           </div>
          </section>
        </header>
      </div>
    </div>
  )}
}

export default Navbar
