import { Button, Modal } from 'react-bootstrap'
import "../detail.style.css"
import L_REACT from "../../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../../assets/img/skills/react-router.svg";
import L_REDUX from "../../../assets/img/skills/redux.svg";
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
                    <h1>MovieApp</h1>
                    <h5>Mobile app Android</h5>
                    <strong>Description:</strong> "Grup project berupa
                        aplikasi mobile yg digunakan untuk mencari dan berbagi
                        resep, memfavoritkan resep, dan membuat plan menu masakan kita setiap harinya.
                        pada project ini saya berperan sebagi frontend"
                        <hr />
                        <strong>Features:</strong>
                        <ul className="pt-1">
                          <li>"Search Movie"</li>
                          <li>"Styled with Semantic-UI"</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                    <ul>
                        <li><a href="https://reactnative.dev/"><img src={L_REACT} alt="react native" /></a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://react.semantic-ui.com/logo.png" alt="CSS" /></a></li>
                        <li><a href="https://reactrouter.com/"><img src={L_REACT_ROUTER} alt="JS" /></a></li>
                        <li><a href="https://www.postgresql.org/"><img src={L_REDUX} alt="JS" /></a></li>
                        <li><a href="https://www.github.com/"><img src={L_GITHUB_PAGES} alt="JS" /></a></li>
                    </ul>
            </div>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
      </Modal>
    );
  }

  export default DetailMovieApp