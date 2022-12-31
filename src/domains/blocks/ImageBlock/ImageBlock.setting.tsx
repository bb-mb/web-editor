import { useState } from 'react';
import { ImageFields } from './ImageBlock';

interface Props {
  initValue: ImageFields;
}

export const ImageBlockSetting = ({ initValue }: Props) => {
  const [imageFields, setImageFields] = useState(initValue);

  return (
    <div>
      <label>
        src :
        <input value={imageFields.src} />
      </label>
    </div>
  );
};
