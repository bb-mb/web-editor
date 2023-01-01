import { useState } from 'react';
import styled from '@emotion/styled';

import { COLOR } from '@/contants/colors';
import { ComponentSelector, Setting, Viewer } from '@/domains/editor/section';
import { ImageBlock, TextBlock, IBlock } from '@/domains/blocks';

const dummy = [
  new ImageBlock({
    id: 'img1',
    fields: { src: '/vercel.svg', width: '200', height: '200' },
  }),
  new TextBlock({
    id: 'text1',
    fields: { text: '텍스트입니다.', color: 'blue' },
  }),
  new ImageBlock({
    id: 'img2',
    fields: { src: '/next.svg', width: '100', height: '200' },
  }),
  new TextBlock({
    id: 'text2',
    fields: { text: '텍스트입니다.2', color: '#f00' },
  }),
];

export const EditorHomePage = () => {
  const [blocks, setBlocks] = useState<IBlock[]>(dummy);
  const [focusBlock, setFocusBlock] = useState<IBlock>();

  return (
    <Wrap>
      <Header>Web Editor</Header>
      <Contents>
        <ComponentSelector />
        <Viewer
          blocks={blocks}
          focusBlock={focusBlock}
          setFocusBlock={setFocusBlock}
        />
        <Setting focusBlock={focusBlock} />
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
