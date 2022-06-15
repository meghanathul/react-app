import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/home' className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='./home' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='./About' className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='./contactus' className="nav-link" href="#">ContactUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='./product' className="nav-link disabled" href="#">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header