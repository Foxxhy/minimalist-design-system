import { FormLabel } from "./FormLabel";

interface Props {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
export const FormCheckBox = ({ label, onChange }: Props) => {
    return (
      <FormLabel>
        <input type="checkbox" className="checkbox" onChange={onChange} /> {label}
      </FormLabel>
    );
  };