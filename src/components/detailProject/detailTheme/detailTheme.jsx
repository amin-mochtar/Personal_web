import { Button, Modal } from 'react-bootstrap'
import "../detail.style.css"

import L_JAVASCRIPT from "../../../assets/img/skills/javascript.svg";
import L_HTML5 from "../../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../../assets/img/skills/css3.svg";
import L_GITHUB_PAGES from "../../../assets/img/skills/github.svg";

function DetailMovieApp(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="modal-container"
        >
            {/* <movie.Header closeButton /> */}
            <div className="box-modal">
                    <h1>Dark Theme</h1>
                    <strong>Description:</strong> mengubah tema website(dark
                        anda light).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>mengubah tema</li>

                          <hr />
                        </ul>
                        <strong>Tech used:</strong>
                    <ul>
                        <li><a href="https://javascript.com/"><img src={L_JAVASCRIPT} alt="JS" /></a></li>
                        <li><a href="https://developer.mozilla.org/id/docs/Web/CSS"><img src={L_CSS3} alt="CSS" /></a></li>
                        <li><a href="https://developer.mozilla.org/id/docs/Web/HTML"><img src={L_HTML5} alt="CSS" /></a></li>
                        <li><a href="https://www.github.com/"><img src={L_GITHUB_PAGES} alt="github" /></a></li>
                    </ul>
            </div>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
      </Modal>
    );
  }

  export default DetailMovieApp