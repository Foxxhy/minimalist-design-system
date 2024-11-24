interface Props {
    title?: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
  }
  
export const Card = ({ title, content, footer }: Props) => {
    return (
      <div className="card">
        {title && <h2 className="card-title">{title}</h2>}
        <div className="card-content">{content}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  };