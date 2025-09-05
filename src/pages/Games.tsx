import Header from "../components/ui/Header";
import BannerWelcome from "../components/ui/BannerWelcome";
import TrendingGames from "../components/ui/TrendingGames";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="gamesPage-container">
            <div className="gamesPage-content">
               <Header /> 
            </div>
            <div className="gamesPage-cards">
                <TrendingGames />
            </div>
        </div>
    )
}