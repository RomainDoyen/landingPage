import "../../styles/Card.css"
import Image from "./Image"

interface CardProps {
    title: string;
    image: string;
}

export default function Card({ title, image }: CardProps) {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
            </div>
        </div>
    )
}