import { debounce } from 'lodash-es';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ImageFields } from './ImageBlock';

interface Props {
  initValue: ImageFields;
  updateBlock: (newFields: ImageFields) => void;
  deleteBlock: () => void;
}

export const ImageBlockSetting = ({
  initValue,
  updateBlock,
  deleteBlock,
}: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initValue,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const callSubmit = debounce(() => formRef.current?.requestSubmit(), 300);

  const registerWithSubmit = (name: keyof ImageFields) =>
    register(name, { onChange: callSubmit });

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(updateBlock)}>
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

        <br />
        <button type="button" onClick={deleteBlock}>
          삭제하기
        </button>
      </form>
    </div>
  );
};
