interface Props {
    id?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormArea = ({ id, placeholder, onChange }: Props) => {
    return (
        <textarea
            id={id}
            className="textarea"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};