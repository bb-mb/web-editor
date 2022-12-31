import { Block } from '@/domains/blocks';
import styled from '@emotion/styled';

interface Props {
  focusBlock?: Block;
}

export const Setting = ({ focusBlock }: Props) => {
  return (
    <Wrap>
      <span>setting</span>
      <hr />
      {focusBlock?.renderSetting()}
    </Wrap>
  );
};

export const Wrap = styled.div`
  width: 250px;
`;
