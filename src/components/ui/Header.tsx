import banner from "../../assets/banner.png"
import "../../styles/Header.css"
import Input from "./Input"
import { SearchIcon } from "lucide-react"
import Image from "./Image"

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="hero-image">
                    <Image src={banner} alt="Hero Image" />
                </div>
                <nav className="nav-container">
                    <div className="nav-links">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                        <a href="#">Game</a>
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