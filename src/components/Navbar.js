import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import { TiNews } from "react-icons/ti";
import { FaBars } from "react-icons/fa";



const Navbar = (props) => {


    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>.
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap" rel="stylesheet"></link>

            <nav className="navbar fixed-top navbar-expand-lg navbar- bg-" style={{background: 'red', height: '67px' }}>
                <div className="container-fluid">
                {/* <TiNews style={{color: 'white', fontSize:'34px'}} /> */}
                    <Link className="navbar-brand" to="/" style={{
                        color: 'white',
                        fontSize: ' 30px',
                        fontFamily: 'Cairo',
                        fontWeight: '200px',
                        textDecoration: 'none',
                        paddingTop:'0.25px',
                        paddingLeft:'9px'
                    }}>EverySecNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: 'orangered'}}>
                        <span className="navbar-toggler-icon"style={{color: 'whtte'}}><FaBars/></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent"  >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{paddingTop:'1.130px',backgroundColor: 'red'}}>
                            <li className="nav-item">
                                <Link style={{
                                    color: 'white', fontSize: ' 21px',
                                    fontFamily: 'Cairo',

                                    textDecoration: 'none'
                                }} className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>



                            <li className="nav-item"> <Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',
                                fontWeight: '200px',
                                textDecoration: 'none'
                            }} to="/business">Business</Link>    </li>

                            <li className="nav-item"> <Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/entertainment">Entertainment</Link>    </li>

                            <li className="nav-item"><Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/general">General</Link>    </li>

                            <li className="nav-item"> <Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',
                                fontWeight: '200px',
                                textDecoration: 'none'
                            }} to="/health">Health</Link>    </li>

                            <li className="nav-item"><Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/science">Science</Link>    </li>

                            <li className="nav-item"> <Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/sports">Sports</Link>    </li>

                            <li className="nav-item"> <Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/technology">Technology</Link>    </li>

                            <li className="nav-item"><Link className="nav-link" style={{
                                color: 'white', fontSize: ' 21px',
                                fontFamily: 'Cairo',

                                textDecoration: 'none'
                            }} to="/speech" >Speech</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
