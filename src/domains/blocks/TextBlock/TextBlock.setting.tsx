import { useState } from 'react';
import { TextFields } from './TextBlock';

interface Props {
  initValue: TextFields;
}

export const TextBlockSetting = ({ initValue }: Props) => {
  const [textFields, setTextFields] = useState(initValue);

  return (
    <div>
      <label>
        src :
        <input value={textFields.text} />
      </label>
    </div>
  );
};
