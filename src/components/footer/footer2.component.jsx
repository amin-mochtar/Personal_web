import React from 'react'
import "./footer.style.css"

const footer = () => {
    return (
        <div id="footer">
            <footer>
                    <div className="container">
                        <div className="box">
                            <h3>Quik Links</h3>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/amin-mochtar/">Linkedin</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="mail:aminmochtar03@gmail.com">Email: aminmochtar03@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Social Media</h3>
                            <div>
                                <ul>
                                    <li>
                                        <a target="blank" href="https://web.facebook.com/amin.moch.777">
                                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="blank" href="https://twitter.com">
                                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                                            <span>Google +</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="blank" href="https://www.instagram.com/amin_rosydi/">
                                            <img src="./assets/img/instagram-icon-33483.png" alt=""/>   
                                            <span>Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="copyright">
                    <div>
                        Copyright © 2021 .All rights reserved by <a href="https://www.instagram.com/codersgyan/">Amin Mochtar</a>.
                    </div>
                </footer>
        </div>
    )
}

export default footer
