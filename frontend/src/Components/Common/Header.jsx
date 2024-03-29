import React from "react";
import { Link } from "react-router-dom";
import { Display } from "../Display";
import UserIcon from "../UserIcon";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import reactlogogreen from "../Common/react_green.svg";
import { useLogout } from "../../hooks/useLogout";

function Header () {

    const { logout } = useLogout()

    const {user} = UseAuthContext()

    const handleLogout = () =>{
      logout()
    }

    function closeMenu(){
      document.getElementById('offcanvasDark').classList.remove('show')
    }

    return(
        <div className="container">
            <div className="row p-2 pb-3">
              <div className="col-3">
              <UserIcon />
              </div>
              <Display />
              <div className="col-3 text-white fs-3 d-flex justify-content-end align-items-center">
              <i className="fa fa-bars acid-text" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark"></i>

                    <div className="offcanvas offcanvas-end offcanvas-dark bg-black pb-4" data-bs-scroll="true" tabIndex="-1" id="offcanvasDark" aria-controls="offcanvasWithBothOptions" aria-labelledby="offcanvasDarkLabel">
                      <div className="offcanvas-header">
                        <img src={reactlogogreen}  width="30"></img>
                        <h5 className="offcanvas-title text-white" id="offcanvasWithBothOptionsLabel">React Drum Machine</h5>
                        <i type="button" className="fa fa-times btn-close acid-text" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                      </div>
                      <div className="offcanvas-body">
                      <div className="list">
                        <ul className="list-unstyled nav-pills">
                          <li>
                          <Link to="/" className="acid-text nav-item text-decoration-none" onClick={()=>closeMenu()}>
                            <i className="fa fs-6 fa fa-keyboard mx-2 text-white"></i>
                            Demo DrumPad
                            </Link>
                          </li>
                          <li>
                             <Link to="/dashboard" className="acid-text nav-item text-decoration-none" onClick={()=>closeMenu()}>
                              <i className="fa fs-6 fa-calculator mx-2 text-white"></i>
                            Dashboard
                            </Link>
                          </li>


                            {user && (
                                <React.Fragment>
                                <li className="text-white fs-5 mt-3">
                                 <Link to="/homeuser" className="acid-text nav-item text-decoration-none">
                                 <i className="fa fs-6 fa-heart mx-2 text-danger"></i>
                                  Custom DrumPAD
                                  </Link>
                                </li>
                              <li className="text-white fs-5">
                                <i className="fa fa-user mx-2"></i>
                                {user.email}</li>
                                <li className="text-white fs-5" onClick={handleLogout}>
                                  <i className="fa fa-toggle-off fs-6 mx-2 text-white"></i>
                                  Logout</li>
                                </React.Fragment>

                            )
                            }







                        </ul>

                      </div>

                      </div>
                    </div>
              </div>
          </div>

        </div>
    )
}

export default Header;