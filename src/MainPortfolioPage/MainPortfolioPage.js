import "./MainPortfolioPage.css";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
export default function MainPortfolioPage({ ChangeHeight }) {
  return (
    <>
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <MobileView>
                    <button
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarText"
                      aria-controls="navbarText"
                      onClick={ChangeHeight}
                      type="button"
                      className="btn btn-light navigation-buttons"
                    >
                      <strong>Cover Art/Socials</strong>
                    </button>
                  </MobileView>
                  <BrowserView>
                    <button
                      onClick={ChangeHeight}
                      type="button"
                      className="btn btn-light navigation-buttons"
                    >
                      <strong>Cover Art/Socials</strong>
                    </button>
                  </BrowserView>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <MobileView>
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        About
                      </button>
                    </MobileView>
                    <BrowserView>
                      <button
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        About
                      </button>
                    </BrowserView>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects">
                    <MobileView>
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        Projects
                      </button>
                    </MobileView>
                    <BrowserView>
                      <button
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        Projects
                      </button>
                    </BrowserView>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/resume">
                    <MobileView>
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        Resume
                      </button>
                    </MobileView>
                    <BrowserView>
                      <button
                        type="button"
                        className="btn btn-light navigation-buttons"
                      >
                        Resume
                      </button>
                    </BrowserView>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="beginningOfPortfolioDiv">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                className="profilePic"
                src="media/LinkedInXaviGithub.webp"
                alt="user Pic"
              />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
