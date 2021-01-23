import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Mealo from "../../assets/img/projects/mealoApp.png";
import MovieApp from "../../assets/img/projects/React Movies.png";
import EcommerceAdmin from "../../assets/img/projects/e-commorce admin.png";
import TRIVIA from "../../assets/img/projects/trivia kuis.png";
import CustomerShop from "../../assets/img/projects/e-commerce  customer.png";
import Todo from "../../assets/img/projects/Vue Fancy Todos.png";
import ThemeWeb from "../../assets/img/projects/Dark light theme.png";
import Kalkulator from "../../assets/img/projects/calculator.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";

import "./project-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Mealo with React Native*/}
          <ImageEvent
            date="18/12/2020"
            className="text-center"
            text="React Native Meal planer"
            src={Mealo}
            alt="React mealo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Projek Grup berupa
                        aplikasi mobile yg digunakan untuk mencari dan berbagi
                        resep membuat plan menu masakan kita setiap harinya,
                        disini saya berperan sebagi frontend
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>mencari resep makana</li>
                          <li>membagikan resep yang kita punya</li>
                          <li>membuat plan menu masakan</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React Native"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Ntive
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://img.icons8.com/color/452/graphql.png"
                                alt="Graphql"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GraphQl
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://seeklogo.com/images/A/apollo-logo-DC7DD3C444-seeklogo.com.png"
                                alt="Apollo"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Apollo
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://pbs.twimg.com/profile_images/1197491571849084933/HAwtsa-i.jpg"
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Paper
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="postgresql"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Postgresql
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://expo.io/@gerryas/projects/mealo-app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/mealo-team" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://youtu.be/hWg-bm4WrIY" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: React Movies web */}
          <ImageEvent
            date="27/11/2020"
            className="text-center"
            text="React Movies Web  "
            src={MovieApp}
            alt="React Movies Web  "
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Web yang dibuat dengan
                        react dan tv maze API.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search Movie</li>
                          <li>Styled with Semantic-UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://react.semantic-ui.com/logo.png"
                                alt="Semantic-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Semantic-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://aminwebmovie.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/amin-mochtar/react-challenge"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project:  TRIVIA VAGESPORT */}
          <ImageEvent
            date="21/01/2020"
            className="text-center"
            text="TRIVIA FAGESPORT"
            src={TRIVIA}
            alt="TRIVIA FAGESPORT"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
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
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
                                alt="VUEX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VUEX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://w7.pngwing.com/pngs/669/853/png-transparent-security-token-json-web-token-access-token-representational-state-transfer-others-miscellaneous-angle-rectangle-thumbnail.png"
                                alt="JWT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JWT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://www.maxpixel.net/static/photo/640/Shield-Defense-Anti-Virus-Protection-Viruses-1970470.png"
                                alt="BcriptJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BcriptJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://symbols-electrical.getvecta.com/stencil_74/147_axios.1cfeb3fa9b.png"
                                alt="Axios"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Axios
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgrSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgrSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="PostgrSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgrSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Team-10-EindhovenHacktiv8"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton>WATCH VIDEO</UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: E-commerce customer */}

          <ImageEvent
            date="19/11/2020"
            className="text-center"
            text="E-commerce"
            src={CustomerShop}
            alt="E-commerce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> website untuk berbelanja
                        produk yang tersedia.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>CRUD Product</li>
                          <li>Login Register Customer</li>
                          <li>Usage Vuex store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
                                alt="VUEX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VUEX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://w7.pngwing.com/pngs/669/853/png-transparent-security-token-json-web-token-access-token-representational-state-transfer-others-miscellaneous-angle-rectangle-thumbnail.png"
                                alt="JWT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JWT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://www.maxpixel.net/static/photo/640/Shield-Defense-Anti-Virus-Protection-Viruses-1970470.png"
                                alt="BcriptJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BcriptJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://symbols-electrical.getvecta.com/stencil_74/147_axios.1cfeb3fa9b.png"
                                alt="Axios"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Axios
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgrSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgrSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://ecommerce-cus.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/amin-mochtar/ecommerce_client_cms"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: E-commerce customer */}
          <ImageEvent
            date="15/11/2020"
            className="text-center"
            text="E-Commerce Admin"
            src={EcommerceAdmin}
            alt="E-Commerce Admin"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Aplikasi privat admin
                        online shop untuk Menambah, mengedit, dan menghapus
                        produk yg dia punya
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login Admin</li>
                          <li>CRUD Produk</li>
                        </ul>
                        <hr />
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
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
                                alt="VUEX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VUEX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://w7.pngwing.com/pngs/669/853/png-transparent-security-token-json-web-token-access-token-representational-state-transfer-others-miscellaneous-angle-rectangle-thumbnail.png"
                                alt="JWT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JWT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://www.maxpixel.net/static/photo/640/Shield-Defense-Anti-Virus-Protection-Viruses-1970470.png"
                                alt="BcriptJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BcriptJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://symbols-electrical.getvecta.com/stencil_74/147_axios.1cfeb3fa9b.png"
                                alt="Axios"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Axios
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgrSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgrSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://e-commerce-123-94109.web.app/login"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/amin-mochtar/ecommerce_client_cms.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton>WATCH VIDEO</UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: FancyTodo */}

          <ImageEvent
            date="30/10/2020"
            className="text-center"
            text="Todo list"
            src={Todo}
            alt="Todo List"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
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
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png"
                                alt="JQuery"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JQuery
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NodeJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NodeJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/amin-mochtar/fancy-todo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Dark Ligth Theme */}
          <ImageEvent
            date="25/09/2019"
            className="text-center"
            text="Dark Light theme"
            src={ThemeWeb}
            alt="Dark Light theme"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
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
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GITHUB_PAGES}
                                alt="Github pages"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Github pages
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://amin-mochtar.github.io/mengubah-tema.io/index.html" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/amin-mochtar/mengubah-tema.io" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Dark Ligth Theme */}
          <ImageEvent
            className="text-center"
            text="Kalkulator"
            src={Kalkulator}
            alt="Kalkulator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Kalkulator
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Kalkulator web</li>

                          <hr />
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GITHUB_PAGES}
                                alt="Github pages"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Github pages
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://amin-mochtar.github.io/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/amin-mochtar/amin-mochtar.github.io" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
