import { Block } from '@/domains/blocks/Block';
import styled from '@emotion/styled';

interface Props {
  blocks: Block[];
}

export const Viewer = ({ blocks }: Props) => {
  return (
    <Wrap>
      Viewer
      <BlockWrap>
        {blocks.map((block) => {
          const Component = block.render;

          return <Component key={block.id} />;
        })}
      </BlockWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  flex: 1;
`;

const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
