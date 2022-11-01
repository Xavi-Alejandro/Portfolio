import { data } from "./data";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((project) => {
            return (
              <div className="col-sm-4">
                <div key={project.id}>
                  <div className="card">
                    <div className="bg-image">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="card-img-top"
                          src={project.gifSource}
                          alt={project.projectTitle}
                        ></img>
                      </a>
                    </div>
                    <div className="card-body">
                      <h4>{project.projectTitle}</h4>
                      {project.projectDescription.map((paragraph) => {
                        return (
                          <div key={paragraph.id}>
                            <p className="card-text">{paragraph.data}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            );
          })}
        </div>
        <br/>
      </div>
    </>
  );
}
