interface Props {
    level?: 1 | 2 | 3 | 4 | 5 | 6; // Restriction au niveau HTML valide
    children: React.ReactNode; // Le contenu à afficher
}

export const Title = ({ level = 1, children }: Props) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Cast explicite pour éviter l'erreur
    return <HeadingTag className={`h${level}`} >{children}</HeadingTag>;
};