import {Link} from 'react-router-dom'
import './navbar.css'
import DownloadResumeButton from "../download-resume/download-resume";


const Navbar: React.FC = () =>{
    return(
        <nav className="Navbar">
            <div className="NavbarContainer">
                <Link to="/">Home</Link>
                <Link to="/about-me">About me</Link>
                <Link to="/my-work">My work</Link>
                <Link to="/connect">Let's connect</Link>
                <DownloadResumeButton/>



            </div>

        </nav>
    )
}

export default Navbar