import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IBlock } from '@/domains/blocks';
import { useEffect, useState } from 'react';

interface Props {
  block: IBlock;
  isFocusBlock: boolean;
  setFocusBlock: (block?: IBlock) => void;
}

export const BlockWrap = ({ block, isFocusBlock, setFocusBlock }: Props) => {
  const [_, rerender] = useState({});

  useEffect(() => {
    const unscribe = block.subscribe(() => rerender({}));
    return unscribe;
  }, [block]);

  const Component = block.render;

  return (
    <StyledBlockWrap
      key={block.getId()}
      isFocusBlock={isFocusBlock}
      onClick={(e) => {
        e.stopPropagation();
        setFocusBlock(block);
      }}
    >
      <Component />
    </StyledBlockWrap>
  );
};

const StyledBlockWrap = styled.div<{ isFocusBlock: boolean }>`
  ${({ isFocusBlock }) =>
    isFocusBlock &&
    css`
      border: 1px solid purple;
    `}

  &:hover {
    border: 1px solid lavender;
  }
`;
