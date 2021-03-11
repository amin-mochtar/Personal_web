import { Button, Modal } from 'react-bootstrap'
import "../detail.style.css"

import L_NODE_JS from "../../../assets/img/skills/nodejs.svg";
import L_POSTGRESQL from "../../../assets/img/skills/postgresql.svg";
import L_HTML5 from "../../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../../assets/img/skills/css3.svg";


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
                    <h1>Todo App</h1>
                    <strong>Description:</strong> Todo App untuk membuat
                        list kegiatan kita yang dibuat dengan JQuery untuk
                        client dan Sequelize Express untuk server.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register user</li>
                          <li>login user yg terdaftar</li>
                          <li>add, Read, edit Delete todo</li>
                          <li>HelloSalut API</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                    <ul>
                        <li><a href="https://reactnative.dev/"><img src={L_HTML5} alt="react native" /></a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" alt="CSS" /></a></li>
                        <li><a href="https://reactrouter.com/"><img src={L_CSS3} alt="JS" /></a></li>
                        <li><a href="https://www.postgresql.org/"><img src={L_POSTGRESQL} alt="JS" /></a></li>
                        <li><a href="https://www.github.com/"><img src={L_NODE_JS} alt="JS" /></a></li>
                    </ul>
            </div>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
      </Modal>
    );
  }

  export default DetailMovieApp