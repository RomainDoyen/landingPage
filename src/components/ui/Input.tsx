import "../../styles/Input.css"

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
    icon: React.ReactNode;
}

export default function Input({
    type,
    placeholder,
    value,
    onChange,
    className,
    icon,
    ...props
}: InputProps) {
    return (
        <div className={className}>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} {...props} />
            {icon && <div className="icon">{icon}</div>}
        </div>
    )
}