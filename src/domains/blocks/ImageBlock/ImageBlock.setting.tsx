import { debounce } from 'lodash-es';
import { useRef, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { ImageFields } from './ImageBlock';

interface Props {
  initValue: ImageFields;
  update: (newFields: ImageFields) => void;
}

export const ImageBlockSetting = ({ initValue, update }: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initValue,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const callSubmit = debounce(() => formRef.current?.requestSubmit(), 300);

  const registerWithSubmit = (name: keyof ImageFields) =>
    register(name, { onChange: callSubmit });

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(update)}>
        <label>
          width :
          <input {...registerWithSubmit('width')} />
        </label>
        <br />

        <label>
          height :
          <input {...registerWithSubmit('height')} />
        </label>
        <br />

        <label>
          src :
          <input {...registerWithSubmit('src')} />
        </label>
      </form>
    </div>
  );
};
