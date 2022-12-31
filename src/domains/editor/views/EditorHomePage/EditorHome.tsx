import { COLOR } from '@/contants/colors';
import styled from '@emotion/styled';
import { ComponentSelector, Setting, Viewer } from '@/domains/editor/section';
import { useState } from 'react';
import { Block } from '@/domains/blocks/Block';
import { ImageBlock, TextBlock } from '@/domains/blocks';

export const EditorHomePage = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    new ImageBlock({ id: 'img1', src: '/vercel.svg' }),
    new TextBlock({ id: 'text1', text: '텍스트입니다.' }),
    new ImageBlock({ id: 'img2', src: '/next.svg' }),
    new TextBlock({ id: 'text2', text: '텍스트입니다.2' }),
  ]);

  return (
    <Wrap>
      <Header>Web Editor</Header>
      <Contents>
        <ComponentSelector />
        <Viewer blocks={blocks} />
        <Setting />
      </Contents>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${COLOR.MINT};
`;

const Contents = styled.div`
  flex: 1;
  display: flex;
`;
