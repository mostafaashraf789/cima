import React from 'react'


function Footer() {
  return (
    <>

<footer className="bg-dark text-white py-4 mt-auto" >
      <div className="container text-center">
        <div className= "row" >
          <div className="col-md-4">
            <h5>About Cima</h5>
            <p>
              Cima is your go-to platform for discovering the latest movies and TV shows. Stay updated with reviews, ratings, and more!
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/" className="text-white text-decoration-none ">About</a></li>
              <li><a href="/" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2"><a href="https://facebook.com" className="text-white"><i className="fab fa-facebook-f"></i></a></li>
              <li className="mx-2"><a href="https://twitter.com" className="text-white"><i className="fab fa-twitter"></i></a></li>
              <li className="mx-2"><a href="https://instagram.com" className="text-white"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; 2024 Cima Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer