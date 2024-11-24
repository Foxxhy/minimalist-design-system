interface Props {
    onSubmit?: (e: React.FormEvent) => void;
    children: React.ReactNode;
}

export const Form = ({ onSubmit, children }: Props) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};