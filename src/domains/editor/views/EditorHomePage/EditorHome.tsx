import { useState } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import { COLOR } from '@/contants/colors';
import { ComponentSelector, Setting, Viewer } from '@/domains/editor/section';
import {
  ImageBlock,
  TextBlock,
  IBlock,
  createDefaultBlock,
} from '@/domains/blocks';
import { BLOCK } from '@/contants/block';

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

const reorder = (arr: IBlock[], start: number, end: number) => {
  const result = [...arr];
  const [removed] = result.splice(start, 1);
  result.splice(end, 0, removed);

  return result;
};

const copy = (arr: IBlock[], blockId: BLOCK, index: number) => {
  const newBlock = createDefaultBlock(blockId);
  if (!newBlock) return arr;

  const result = [...arr];
  result.splice(index, 0, newBlock);

  return result;
};

export const EditorHomePage = () => {
  const [blocks, setBlocks] = useState<IBlock[]>(dummy);
  const [focusBlock, setFocusBlock] = useState<IBlock>();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    switch (result.source.droppableId) {
      case 'blockList':
        setBlocks((blocks) =>
          reorder(blocks, result.source.index, result.destination!.index)
        );
      case 'selector':
        setBlocks((blocks) =>
          copy(blocks, result.source.index, result.destination!.index)
        );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
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
