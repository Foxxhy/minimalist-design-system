interface Props {
    variant?: 'primary' | 'secondary' | 'outline';
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', type = 'button', onClick, children }: Props) => {
    const className = `btn btn-${variant}`;
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
};