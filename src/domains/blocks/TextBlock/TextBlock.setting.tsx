import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash-es';
import { TextFields } from './TextBlock';

interface Props {
  initValue: TextFields;
  update: (fields: TextFields) => void;
}

export const TextBlockSetting = ({ initValue, update }: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initValue,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const callSubmit = debounce(() => formRef.current?.requestSubmit(), 100);

  const registerWithSubmit = (name: keyof TextFields) =>
    register(name, { onChange: callSubmit });

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(update)}>
        <label>
          text :
          <input {...registerWithSubmit('text')} />
        </label>
        <br />

        <label>
          color :
          <input {...registerWithSubmit('color')} />
        </label>
      </form>
    </div>
  );
};
