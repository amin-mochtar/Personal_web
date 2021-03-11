import { Button, Modal } from 'react-bootstrap'
import './detail.style.css'
import L_REACT from "../../assets/img/skills/react.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";

function DetailProject(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="modal-container"
        >
            {/* <Modal.Header closeButton /> */}
            <div className="box-modal">
                    <h1>Mealo</h1>
                    <h5>Mobile app Android</h5>
                    <strong>Description:</strong> "Grup project berupa
                        aplikasi mobile yg digunakan untuk mencari dan berbagi
                        resep, memfavoritkan resep, dan membuat plan menu masakan kita setiap harinya.
                        pada project ini saya berperan sebagi frontend"
                        <hr />
                        <strong>Features:</strong>
                        <ul className="pt-1">
                          <li>"mencari resep makana"</li>
                          <li>"membagikan resep yang kita punya"</li>
                          <li>"membuat plan menu masakan"</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                    <ul>
                        <li><a href="https://reactnative.dev/"><img src={L_REACT} alt="react native" /></a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={L_CSS3} alt="CSS" /></a></li>
                        <li><a href="https://www.javascript.com/"><img src={L_JAVASCRIPT} alt="JS" /></a></li>
                        <li><a href="https://graphql.org/"><img src="https://img.icons8.com/color/452/graphql.png" alt="GraphQL server/client" /></a></li>
                        <li><a href="https://www.apollographql.com/docs/apollo-server/"><img src="https://pbs.twimg.com/profile_images/1197491571849084933/HAwtsa-i.jpg" alt="apollo-server/client" /></a></li>
                        <li><a href="https://reactnavigation.org/"><img src="https://img.stackshare.io/service/6422/react-navigation.png" alt="react navigation" /></a></li>
                        <li><a href="https://www.postgresql.org/"><img src={L_POSTGRESQL} alt="JS" /></a></li>
                        <li><a href="https://www.github.com/"><img src={L_GITHUB_PAGES} alt="JS" /></a></li>
                    </ul>
            </div>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
      </Modal>
    );
  }

  export default DetailProject