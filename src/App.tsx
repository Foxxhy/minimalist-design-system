import { useState } from 'react'
import './css/index.css'
import './App.css'

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
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', type = 'button', onClick, children }: ButtonProps) => {
  const className = `btn btn-${variant}`;
  return (
    <button className={className} type={type} onClick={onClick}>
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

interface NotificationProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  onClose?: () => void;
}

const Notification = ({ variant, title, message, onClose }: NotificationProps) => {
  return (
    <div className={`notification notification-${variant}`}>
      <div className="notification-content">
        <div className="notification-title">{title}</div>
        <div className="notification-message">{message}</div>
      </div>
      <button className="notification-close" onClick={onClose}>×</button>
      <div className="notification-progress"></div>
    </div>
  );
};

interface CardProps {
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

function App() {

  return (
    <>
      <header className="header">
        <Title level={1}>Design System</Title>
      </header>

      <main>
        <section className="section">
          <Title level={2}>Typography</Title>
          <div className="demo-grid">
            <Title level={1}>Heading 1</Title>
            <Title level={2}>Heading 2</Title>
            <Title level={3}>Heading 3</Title>
            <Title level={4}>Heading 4</Title>
            <Text>Regular paragraph text with <Text bold>bold</Text> and <Text italic>italic</Text> variations.</Text>
          </div>
        </section>

        <section className="section">
          <Title level={2}>Buttons</Title>
          <div className="demo-grid">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </section>

        <section className="section">
          <Title level={2}>Cards</Title>
          <div className="demo-grid">
            <div className="card">
              <Title level={3}>Card Title</Title>
              <Text>This is a sample card component with hover effects and shadows.</Text>
            </div>
          </div>
        </section>

        <section className="section">
          <Title level={2}>Badges</Title>
          <div className="demo-grid">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </section>

        <section className="section">
          <Title level={2}>Notifications</Title>
          <div className="demo-grid">
            <Notification
              variant="info"
              title="Information"
              message="This is an informative notification message."
            />
            <Notification
              variant="success"
              title="Success"
              message="Your action was completed successfully!"
            />
            <Notification
              variant="warning"
              title="Warning"
              message="Please review your input before proceeding."
            />
            <Notification
              variant="error"
              title="Error"
              message="An error occurred. Please try again."
            />
          </div>
        </section>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Nom</Label>
            <Input type="text" id="name" placeholder="Entrez votre nom" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" error placeholder="Entrez votre email" />
            <ErrorMessage message="Adresse email invalide." />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" placeholder="Écrivez votre message" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Genre</Label>
            <Select 
              id="gender"
              options={["Masculin", "Féminin", "Non spécifié"]}
            />
          </FormGroup>

          <FormGroup>
            <Checkbox label="J'accepte les termes et conditions" />
          </FormGroup>

          <FormGroup>
            <Button variant="primary" type="submit">Envoyer</Button>
            <Button variant="secondary" type="reset">Réinitialiser</Button>
          </FormGroup>
        </Form>
        <div style={{ display: "flex", gap: "16px", padding: "32px" }}>
      {/* Example 1: Basic Card */}
      <Card
        title="Card Title"
        content="This is the content of the card. It provides an example of how text or other elements look inside."
      />

      {/* Example 2: Card with Footer */}
      <Card
        title="Interactive Card"
        content="This card includes a footer with actions like buttons."
        footer={
          <>
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-outline">Decline</button>
          </>
        }
          />
        </div>
      </main>
    </>
  )
}

export default App
