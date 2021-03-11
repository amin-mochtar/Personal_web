import { Button, Modal } from 'react-bootstrap'
import "../detail.style.css"

import L_HEROKU from "../../../assets/img/skills/heroku.svg";
import L_EXPRESS from "../../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../../assets/img/skills/postgresql.svg";
import L_CSS3 from "../../../assets/img/skills/css3.svg";


function DetailAdmin(props) {
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
                    <h1>Customer Admin</h1>
                    <strong>Description:</strong> Aplikasi privat admin
                        online shop untuk Menambah, mengedit, dan menghapus
                        produk yg dia punya
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>"CRUD Product"</li>
                          <li>"Login Register Admin"</li>
                          <li>"Usage Vuex store"</li>
                        </ul>
                        <em>
                          <strong>Login:</strong>
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em>
                        <hr />
                        <strong>Tech used:</strong>
                    <ul>
                        <li><a href="https://vuex.vuejs.org/"><img src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png" alt="Vuex" /></a></li>
                        <li><a href="https://jwt.io/"><img src="https://w7.pngwing.com/pngs/669/853/png-transparent-security-token-json-web-token-access-token-representational-state-transfer-others-miscellaneous-angle-rectangle-thumbnail.png" alt="jwt" /></a></li>
                        <li><a href="https://www.npmjs.com/package/bcryptjs"><img src="https://www.maxpixel.net/static/photo/640/Shield-Defense-Anti-Virus-Protection-Viruses-1970470.png" alt="Bcryptjs" /></a></li>
                        <li><a href="https://developer.mozilla.org/id/docs/Web/CSS"><img src={L_CSS3} alt="CSS" /></a></li>
                        <li><a href="https://expressjs.com/"><img src={L_EXPRESS} alt="Express" /></a></li>
                        <li><a href="https://www.postgresql.org/"><img src={L_POSTGRESQL} alt="Postgre" /></a></li>
                        <li><a href="https://www.heroku.com/"><img src={L_HEROKU} alt="Heroku" /></a></li>
                    </ul>
            </div>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
      </Modal>
    );
  }

  export default DetailAdmin