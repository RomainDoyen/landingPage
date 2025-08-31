import "../../styles/Button.css"

interface ButtonProps {
    text: string;
    color: string;
    backgroundColor: string;
    link: string;
}

export default function Button({ text, color, backgroundColor, link }: ButtonProps) {
    return (
        <button className="button" style={{ color, backgroundColor }} onClick={() => window.location.href = link || ""}>
            {text}
        </button>
    )
}