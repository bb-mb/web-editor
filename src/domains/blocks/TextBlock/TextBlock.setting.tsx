import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextFields } from './TextBlock';

interface Props {
  initValue: TextFields;
}

export const TextBlockSetting = ({ initValue }: Props) => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initValue,
  });

  return (
    <div>
      <form onSubmit={handleSubmit(console.log)}>
        <label>
          text :
          <input {...register('text')} />
        </label>
      </form>
    </div>
  );
};
