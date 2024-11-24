interface TitleProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6; // Restriction au niveau HTML valide
    children: React.ReactNode; // Le contenu à afficher
  }
  
  const Title = ({ level = 1, children }: TitleProps) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Cast explicite pour éviter l'erreur
    return <HeadingTag>{children}</HeadingTag>;
  };
  
  interface TextProps {
    bold?: boolean;
    italic?: boolean;
    children: React.ReactNode;
  }
  
  const Text = ({ bold, italic, children }: TextProps) => {
    const className = `${bold ? "font-bold" : ""} ${italic ? "font-italic" : ""}`.trim();
  
    return <p className={className}>{children}</p>;
  };
  
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    children: React.ReactNode;
  }
  
  const Button = ({ variant = 'primary', onClick, children }: ButtonProps) => {
    const className = `btn btn-${variant}`;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  interface BadgeProps {
    variant: 'primary' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
  }
  
  const Badge = ({ variant, children }: BadgeProps) => {
    return (
      <span className={`badge badge-${variant}`}>{children}</span>
    );
  };
  
  interface NotificationProps {
    variant: 'info' | 'success' | 'warning' | 'error';
    title: string;
    message: string;
    onClose?: () => void;
  }
  
  interface FormProps {
    onSubmit?: (e: React.FormEvent) => void;
    children: React.ReactNode;
  }
  
  const Form = ({ onSubmit, children }: FormProps) => {
    return (
      <form onSubmit={onSubmit}>
        {children}
      </form>
    );
  };
  
  interface FormGroupProps {
    children: React.ReactNode;
  }
  
  const FormGroup = ({ children }: FormGroupProps) => {
    return (
      <div className="form-group">
        {children}
      </div>
    );
  };
  
  interface LabelProps {
    htmlFor?: string;
    children: React.ReactNode;
  }
  
  const Label = ({ htmlFor, children }: LabelProps) => {
    return (
      <label htmlFor={htmlFor} className="label">
        {children}
      </label>
    );
  };
  
  interface InputProps {
    type?: string;
    id?: string;
    placeholder?: string;
    error?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input = ({ type = "text", id, placeholder, error, onChange }: InputProps) => {
    const className = `input ${error ? "input-error" : ""}`.trim();
    return (
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };
  
  interface TextAreaProps {
    id?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  
  const TextArea = ({ id, placeholder, onChange }: TextAreaProps) => {
    return (
      <textarea
        id={id}
        className="textarea"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };
  
  interface SelectProps {
    id?: string;
    options: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const Select = ({ id, options, onChange }: SelectProps) => {
    return (
      <select id={id} className="select" onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    );
  };
  
  interface CheckboxProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Checkbox = ({ label, onChange }: CheckboxProps) => {
    return (
      <Label>
        <input type="checkbox" className="checkbox" onChange={onChange} /> {label}
      </Label>
    );
  };
  
  interface ErrorMessageProps {
    message: string;
  }
  
  const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return <span className="error-message">{message}</span>;
  };