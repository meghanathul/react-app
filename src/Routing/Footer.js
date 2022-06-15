import React from 'react'

const Footer = () => {
  return (
    // <div className='car-footer text-muted'>Footer 2022</div>
    // <!-- Footer -->
    <footer className="page-footer font-small unique-color-dark pt-4">
    
      {/* <!-- Footer Elements --> */}
      <div className="container">
    
        {/* <!-- Call to action --> */}
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-outline-white btn-rounded">Sign up!</a>
          </li>
        </ul>
        {/* <!-- Call to action --> */}
    
      </div>
      {/* <!-- Footer Elements --> */}
    
      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
      {/* <!-- Copyright --> */}
    
    </footer>
    // <!-- Footer -->
    
  )
}

export default Footer