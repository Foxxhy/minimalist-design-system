interface Props {
    bold?: boolean;
    italic?: boolean;
    children: React.ReactNode;
}

export const Typography = ({ bold, italic, children }: Props) => {
    const className = `${bold ? "font-bold" : ""} ${italic ? "font-italic" : ""}`.trim();

    return <p className={className}>{children}</p>;
};
