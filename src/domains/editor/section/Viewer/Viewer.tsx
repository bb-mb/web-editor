import { IBlock } from '@/domains/blocks';
import styled from '@emotion/styled';
import { BlockWrap } from './BlockWrap';

interface Props {
  blocks: IBlock[];
  focusBlock?: IBlock;
  setFocusBlock: (block?: IBlock) => void;
}

export const Viewer = ({ blocks, focusBlock, setFocusBlock }: Props) => {
  const clearFocus = () => setFocusBlock(undefined);

  return (
    <Wrap onClick={clearFocus}>
      Viewer
      <BlockList>
        {blocks.map((block) => {
          return (
            <BlockWrap
              key={block.getId()}
              block={block}
              isFocusBlock={block === focusBlock}
              setFocusBlock={setFocusBlock}
            />
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
