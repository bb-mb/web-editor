import { Block } from '@/domains/blocks/Block';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  blocks: Block[];
  focusBlock?: Block;
  setFocusBlock: (block?: Block) => void;
}

export const Viewer = ({ blocks, focusBlock, setFocusBlock }: Props) => {
  const clearFocus = () => setFocusBlock(undefined);

  return (
    <Wrap onClick={clearFocus}>
      Viewer
      <BlockList>
        {blocks.map((block) => {
          const Component = block.render;

          return (
            <BlockWrap
              key={block.id}
              isFocusBlock={focusBlock === block}
              onClick={(e) => {
                e.stopPropagation();
                setFocusBlock(block);
              }}
            >
              <Component />
            </BlockWrap>
          );
        })}
      </BlockList>
    </Wrap>
  );
};

const Wrap = styled.div`
  flex: 1;
`;

const BlockList = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockWrap = styled.div<{ isFocusBlock: boolean }>`
  ${({ isFocusBlock }) =>
    isFocusBlock &&
    css`
      border: 1px solid purple;
    `}

  &:hover {
    border: 1px solid lavender;
  }
`;
