import "../../styles/TrendingGames.css"
import GameCard from "./Card"
import coa1i1 from "../../assets/coa1i1.jpg"

const trendingGames = [
    {
        id: 1,
        title: "PEAK",
        image: coa1i1,
        description: "Climbing adventure game"
    },
    {
        id: 2,
        title: "CLAIR OBSCUR EXPEDITION 33",
        image: coa1i1,
        description: "Dark fantasy adventure"
    },
    {
        id: 3,
        title: "DONKEY KONG BANANZA",
        image: coa1i1,
        description: "Action-packed platformer"
    },
    {
        id: 4,
        title: "MAFIA THE OLD COUNTRY",
        image: coa1i1,
        description: "Vintage crime drama"
    },
    {
        id: 5,
        title: "MARIOKART WORLD",
        image: coa1i1,
        description: "Racing adventure"
    },
    {
        id: 6,
        title: "BALATRO",
        image: coa1i1,
        description: "Surreal card game"
    }
]

export default function TrendingGames() {
    return (
        <div className="trending-games">
            <div className="trending-header">
                <h2>Recently trending</h2>
                <a href="/trending" className="see-more-link">See More</a>
            </div>
            <div className="trending-cards">
                {trendingGames.map((game) => (
                    <GameCard 
                        key={game.id}
                        title={game.title}
                        image={game.image}
                    />
                ))}
            </div>
        </div>
    )
}
