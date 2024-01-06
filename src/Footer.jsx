import './Footer.css'
import insta from "./pictures/instagram_icon.png"
import linkedin from "./pictures/linkedin_icon.png"
import spotify from "./pictures/spotify_icon.png"

function Footer(){
    return(
        <>
        <foot>
            <footer className="footer">
                <div class="flex">
                    <div class="fixInsta">
                        <a href="https://www.instagram.com/_samir.sanchez_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">
                            <img src={insta} alt="Insta Icon" width="31" height="31"/>
                        </a>
                    </div>
                    <a href="https://www.linkedin.com/in/samir-sanchez-3ac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                        <img src={linkedin} alt="LinkedIn Icon" width="35" height="35"/>
                    </a>
                    <a href="https://open.spotify.com/user/cqjiv06y90p950gwgabnog682?si=F-wSACtWSkao-g3wdX2Rmg" target="_blank">
                        <img src={spotify} alt="Spotify Icon" width="35" height="35"/>
                    </a>
                </div>
            </footer>
        </foot>
        </>
    )
}

export default Footer