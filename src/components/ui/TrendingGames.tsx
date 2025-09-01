import "../../styles/TrendingGames.css"
import GameCard from "./Card"
import { getAll } from "../../api/Services";
import { useState, useEffect } from "react";
import { key } from "../../api/Instances";

// Interface pour typer les données de jeu
interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
}

export default function TrendingGames() {
    const [trendingGames, setTrendingGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log(key);

    useEffect(() => {
        const fetchTrendingGames = async () => {
            try {
                setLoading(true);
                const data = await getAll(`/games?key=${key}`);
                // RAWG API retourne les jeux dans data.results
                if (data && data.results) {
                    setTrendingGames(data.results);
                } else {
                    setTrendingGames([]);
                }
            } catch (err) {
                console.error("Erreur lors du chargement des jeux:", err);
                setError("Erreur lors du chargement des jeux");
                setTrendingGames([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingGames();
    }, []);

    if (loading) {
        return (
            <div className="trending-games">
                <div className="trending-header">
                    <h2>Recently trending</h2>
                    <a href="/trending" className="see-more-link">See More</a>
                </div>
                <div className="trending-cards">
                    <p>Chargement...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="trending-games">
                <div className="trending-header">
                    <h2>Recently trending</h2>
                    <a href="/trending" className="see-more-link">See More</a>
                </div>
                <div className="trending-cards">
                    <p>Erreur: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="trending-games">
            <div className="trending-header">
                <h2>Recently trending</h2>
                <a href="/trending" className="see-more-link">See More</a>
            </div>
            <div className="trending-cards">
                {trendingGames && trendingGames.length > 0 ? (
                    trendingGames.map((game) => (
                        <GameCard 
                            key={game.id}
                            title={game.name}
                            image={game.background_image}
                        />
                    ))
                ) : (
                    <p>Aucun jeu trouvé</p>
                )}
            </div>
        </div>
    )
}
