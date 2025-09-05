import "../../styles/BannerWelcome.css"
import Button from "./Button"
import Compteur from "./Compteur"

export default function BannerWelcome() {
    return (
        <div className="banner-welcome">
            <h1>APEX Games</h1>
            <h5>Discover, collect, analyze your games</h5>
            <div className="metrics">
                <Compteur title="Played" value={42.7} valueMetrics="M" pastilleColor="#EA377A" />
                <Compteur title="Games" value={302} valueMetrics="K" pastilleColor="#43B94F" />
                <Compteur title="Ratings" value={25.5} valueMetrics="M" pastilleColor="#4B7BD4" />
                <Compteur title="Reviews" value={3.01} valueMetrics="M" pastilleColor="#E69B3E" />
                <Compteur title="Lists" value={526} valueMetrics="K" pastilleColor="#EA4747" />
            </div>
            <div className="banner-welcome-button">
                <Button text="Create a free account" color="#ffffff" backgroundColor="#EA377A" link="/signup" />
                <p>or <a href="/login" className="banner-welcome-button-link">log in</a> if you have an account</p>
            </div>
        </div>
    )
}