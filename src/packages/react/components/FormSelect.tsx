interface Props {
    id?: string;
    options: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
export const FormSelect = ({ id, options, onChange }: Props) => {
    return (
      <select id={id} className="select" onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    );
  };
  