import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.style.css"
import {Button} from 'react-bootstrap'

import Mealo from "../../assets/img/projects/mealoApp.png";
import MovieApp from "../../assets/img/projects/React Movies.png";
import EcommerceAdmin from "../../assets/img/projects/e-commorce admin.png";
import TRIVIA from "../../assets/img/projects/trivia kuis.png";
import CustomerShop from "../../assets/img/projects/e-commerce  customer.png";
import Todo from "../../assets/img/projects/Vue Fancy Todos.png";
import ThemeWeb from "../../assets/img/projects/Dark light theme.png";
import Kalkulator from "../../assets/img/projects/calculator.png";
import Detail from '../detailProject/detailProject.component'
import DetailMovieApp from '../detailProject/detailMovie/detailMovieApp.jsx'
import DetailAdmin from '../detailProject/detailAdmin/detailAdmin'
import DetailTrivia from '../detailProject/detailTrivia/detailTrivia'
import DetailCustomer from '../detailProject/detailCustomer/detailCustomer'
import DetailTodo from '../detailProject/detailTodo/detailTodo'
import DetailTheme from '../detailProject/detailTheme/detailTheme'
import DetailKalkulator from '../detailProject/detailKalkulator/detailKalkulator'


// skills

function ProjectSlider() {
    const [modalShow, setModalShow] = useState(false);
    const [showMovieApp, setShowMovieApp] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showTrivia, setShowTrivia] = useState(false);
    const [showCustomer, setShowCustomer] = useState(false);
    const [showTodo, setShowTodo] = useState(false);
    const [showThemeweb, setShowThemeweb] = useState(false);
    const [showKalkulator, setShowKalkulator] = useState(false);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay:true,
        responsive:[
            {
            breakpoint:992,
            settings:{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                cssEase: "linear",
                autoplay:true,
            }
            },
            {
            breakpoint:768,
            settings:{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
                autoplay:true,
            }
        }
        ]
    }
    return (
        <div id="myProjects">
        <Slider {...settings}>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={Mealo} alt="profileImage"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://youtu.be/hWg-bm4WrIY" target="_blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/mealo-team" target="_blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Mealo App<Button variant="primary" onClick={() => setModalShow(true)}>
                            Detail Project
                        </Button>

                        <Detail show={modalShow} onHide={() => setModalShow(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card magic-shadow-sm">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={MovieApp} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="#"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Movie App<Button variant="primary" onClick={() => setShowMovieApp(true)}>
                            Detail Project
                        </Button>

                        <DetailMovieApp show={showMovieApp} onHide={() => setShowMovieApp(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={TRIVIA} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/Team-10-EindhovenHacktiv8" target="_blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/Team-10-EindhovenHacktiv8" target="_blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>Trivia Web Quiz<Button variant="primary" onClick={() => setShowTrivia(true)}>
                            Detail Project
                        </Button>

                        <DetailTrivia show={showTrivia} onHide={() => setShowTrivia(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={EcommerceAdmin} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://e-commerce-123-94109.web.app/login" target="blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/amin-mochtar/ecommerce_client_cms.git" target="blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>ECommerce-admin<Button variant="primary" onClick={() => setShowAdmin(true)}>
                            Detail Project
                        </Button>

                        <DetailAdmin show={showAdmin} onHide={() => setShowAdmin(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={CustomerShop} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://ecommerce-cus.web.app/" target="blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/amin-mochtar/ecommerce_client_cms" target="blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>E-commerce Customer<Button variant="primary" onClick={() => setShowCustomer(true)}>
                            Detail Project
                        </Button>

                        <DetailCustomer show={showCustomer} onHide={() => setShowCustomer(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={Todo} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/amin-mochtar/fancy-todo" target="blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>Todo App<Button variant="primary" onClick={() => setShowTodo(true)}>
                            Detail Project
                        </Button>

                        <DetailTodo show={showTodo} onHide={() => setShowTodo(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={ThemeWeb} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://amin-mochtar.github.io/mengubah-tema.io/index.html" target="_blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/amin-mochtar/" target="blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>Theme Web<Button variant="primary" onClick={() => setShowThemeweb(true)}>
                            Detail Project
                        </Button>

                        <DetailTheme show={showThemeweb} onHide={() => setShowThemeweb(false)} />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="project-card-wrapper">
                <div className="project-card">
                    <div className="project-card-image">
                        <img style={{padding: 15, borderRadius: 20}} src={Kalkulator} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://amin-mochtar.github.io/" target="_blank"><i className="fa fa-film">SeeLive</i></a></li>
                        <li><a href="https://github.com/amin-mochtar/" target="_blank"><i className="fa fa-github">Code</i></a></li>
                    </ul>
                    <div className="details">
                    <h2>Kalkulator<Button variant="primary" onClick={() => setShowKalkulator(true)}>
                            Detail Project
                        </Button>

                        <DetailKalkulator show={showKalkulator} onHide={() => setShowKalkulator(false)} />
                        </h2>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    )
}

export default ProjectSlider