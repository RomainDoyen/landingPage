import '../../styles/Spinner.css';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

export default function Spinner({ size = 'medium', color = '#007bff' }: SpinnerProps) {
    const spinnerSize = {
        small: '20px',
        medium: '40px',
        large: '60px'
    }[size];

    return (
        <div className="spinner">
            <div className="spinner-inner" style={{ width: spinnerSize, height: spinnerSize, borderColor: `${color}20`, borderTopColor: color }}></div>
        </div>
    )
}