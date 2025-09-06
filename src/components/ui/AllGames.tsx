import { getAll } from "../../api/Services";
import { useState, useEffect } from "react";
import type { Game } from "../../types/types";
import Spinner from "./Spinner";
import GameCard from "./Card";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import "../../styles/components/AllGames.css";

export default function AllGames() {

    const [allGames, setAllGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const gamesPerPage = 12; // 6 colonnes × 2 lignes

    useEffect(() => {
        const fetchAllGames = async () => {
            try {
                setLoading(true);
                const data = await getAll("/games");
                setAllGames(data.results);
                setTotalPages(Math.ceil(data.results.length / gamesPerPage));
            } catch (err) {
                console.error("Erreur lors du chargement des jeux:", err);
                setError("Erreur lors du chargement des jeux");
                setAllGames([]);
            } finally {
                setLoading(false);
            }
        };
        fetchAllGames();
    }, []);

    // Calculer les jeux à afficher pour la page courante
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const currentGames = allGames.slice(startIndex, endIndex);

    // Fonction de changement de page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (allGames.length === 0) {
        return <div className="no-games">Aucun jeu trouvé</div>;
    }

    return (
        <div className="all-games-container">
            <div className="all-games-header">
                <h1>{allGames.length} Games</h1>
                {/* Filter */}
                
            </div>
            <div className="all-games">
                {currentGames.map((game) => (
                    <div key={game.id}>
                        <Link to={`/games/${game.id}`}>
                            <GameCard title={game.name} image={game.background_image || ""} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="all-games-footer">
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}