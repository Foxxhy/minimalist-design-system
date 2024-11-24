interface Props {
    variant: 'primary' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
}

export const Badge = ({ variant, children }: Props) => {
    return (
        <span className={`badge badge-${variant}`}>{children}</span>
    );
};
