import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { shanta } from '../../context/Context'


export default function Navbar() {








let {getSearch} = useContext(shanta)





  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand ms-5 " to="movies"><img width={150} src="./Netflix_2015_logo.svg.png
    " alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active fs-3 text-danger  " aria-current="page" to="/">movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-3 text-danger" to="series">series</Link>
        </li>

      
      </ul>
      <form className="d-flex" role="search">
        
        
        <input onChange={getSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
      </form>
    </div>
  </div>
</nav>


    </>
  )
}
