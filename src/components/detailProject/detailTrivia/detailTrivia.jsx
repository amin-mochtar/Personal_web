import { Button, Modal } from 'react-bootstrap'
import "../detail.style.css"

import L_HEROKU from "../../../assets/img/skills/heroku.svg";
import L_EXPRESS from "../../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../../assets/img/skills/postgresql.svg";
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
                    <h1>Trivia Quizz</h1>
                    <strong>Description:</strong> Grup Project berupa Web
                        untuk bermain kuis dan dibangun dengan #rd Party API
                        (HelloSalut, Tenor, Kuis.API), disini saya berperan
                        sebagi Backend
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register login user</li>
                          <li>Signin dengan google</li>
                          <li>say hello diberbagai bahasa</li>
                          <li>Gif jika menyelesaikan kuis</li>
                        </ul>
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

  export default DetailMovieApp