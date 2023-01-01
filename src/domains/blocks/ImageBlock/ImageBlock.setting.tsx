import { debounce } from 'lodash-es';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(update)}>
        <label>
          src :
          <input {...register('src', { onChange: callSubmit })} />
        </label>
      </form>
    </div>
  );
};
