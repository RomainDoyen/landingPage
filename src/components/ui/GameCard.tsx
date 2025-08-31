import "../../styles/GameCard.css"
import Image from "./Image"

interface GameCardProps {
    title: string;
    image: string;
    description?: string;
}

export default function GameCard({ title, image, description }: GameCardProps) {
    return (
        <div className="game-card">
            <div className="game-card-image">
                <Image src={image} alt={title} className="game-card-image" />
            </div>
            <div className="game-card-content">
                <h3 className="game-card-title">{title}</h3>
                {description && <p className="game-card-description">{description}</p>}
            </div>
        </div>
    )
}
