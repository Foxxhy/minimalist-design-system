interface Props {
    message: string;
  }
  
export const FormError = ({ message }: Props) => {
    return <span className="error-message">{message}</span>;
  };