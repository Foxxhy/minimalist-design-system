interface Props {
    children: React.ReactNode;
}

export const FormGroup = ({ children }: Props) => {
    return (
        <div className="form-group">
            {children}
        </div>
    );
};
