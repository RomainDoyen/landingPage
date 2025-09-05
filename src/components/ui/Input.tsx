import "../../styles/Input.css"
import type { InputProps } from "../../types/types";

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