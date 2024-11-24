interface Props {
    type?: string;
    id?: string;
    placeholder?: string;
    error?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({ type = "text", id, placeholder, error, onChange }: Props) => {
    const className = `input ${error ? "input-error" : ""}`.trim();
    return (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};