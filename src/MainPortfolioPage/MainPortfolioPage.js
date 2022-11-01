import "./MainPortfolioPage.css";
import { Link } from "react-router-dom";
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
                  <button
                    onClick={ChangeHeight}
                    type="button"
                    className="btn btn-light navigation-buttons"
                  >
                    <strong>Cover Art</strong>
                  </button>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <button
                      type="button"
                      className="btn btn-light navigation-buttons"
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects">
                    <button
                      type="button"
                      className="btn btn-light navigation-buttons"
                    >
                      Projects
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/resume">
                    <button
                      type="button"
                      className="btn btn-light navigation-buttons"
                    >
                      Resume
                    </button>
                  </Link>
                </li>
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
                src="https://portfoliogifs.s3.us-east-2.amazonaws.com/LinkedInXavi+-+square.jpg"
                alt="user Pic"
              />
            </div>
          </div>
          <br />
          <br />
          <div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
