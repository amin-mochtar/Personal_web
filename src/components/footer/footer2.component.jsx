import React from 'react'
import "./footer.style.css"

const footer = () => {
    return (
        <div>
            <div className="footer-main-div">
                <div className="footer-menu-one">
                    <ul>
                        <li><a rel="noopener noreferrer" href="mailto:aminmochtar03@gmail.com" target="blank">Email</a></li>
                        <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/amin-mochtar/" target="blank">Linkedin</a></li>
                        <li><a rel="noopener noreferrer" href="https://www.instagram.com/amin_rosydi/" target="blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>A.M.R PersonalProtofolioWebsite @2021</p>
            </div>
        </div>
    )
}

export default footer
