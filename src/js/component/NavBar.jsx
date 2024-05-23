import React from "react";

const NavBar = () => {
    return(
          <div className="row">
            <div className="col-sm-12">
              <div className="bg-dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled text-secondary" aria-disabled="true">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled text-secondary" aria-disabled="true">Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
                        </li>
                      </ul>
                      <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-secondary" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
      
    )
}
export default NavBar 