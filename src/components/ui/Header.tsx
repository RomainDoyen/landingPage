import banner from "../../assets/banner.png"
import "../../styles/components/Header.css"
import Input from "./Input"
import { SearchIcon } from "lucide-react"
import Image from "./Image"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="hero-image">
                    <Image src={banner} alt="Hero Image" />
                </div>
                <nav className="nav-container">
                    <div className="site-title">
                        <Link to="/">Backlog974</Link> 
                      </div>
                    <div className="nav-links">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                       <Link to="/games">Games</Link>
                        <Input 
                            type="text" 
                            placeholder="Search" 
                            value="" 
                            onChange={() => {}} className="search-input" icon={<SearchIcon />} 
                        />
                    </div>
                </nav>
            </div>
        </>
    )
}