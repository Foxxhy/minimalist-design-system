interface Props {
    htmlFor?: string;
    children: React.ReactNode;
}

export const FormLabel = ({ htmlFor, children }: Props) => {
    return (
        <label htmlFor={htmlFor} className="label">
            {children}
        </label>
    );
};
