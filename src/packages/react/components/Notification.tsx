interface Props {
    variant: 'info' | 'success' | 'warning' | 'error';
    title: string;
    message: string;
    onClose?: () => void;
  }

export const Notification = ({ variant, title, message, onClose }: Props) => {
    return (
      <aside className={`notification notification-${variant}`}>
        <section className="notification-content">
          <p className="notification-title">{title}</p>
          <p className="notification-message">{message}</p>
        </section>
        <button className="notification-close" onClick={onClose}>×</button>
        <div className="notification-progress"></div>
      </aside>
    );
  };