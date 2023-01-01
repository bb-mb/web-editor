import { IBlock } from '@/domains/blocks';
import styled from '@emotion/styled';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { BlockWrap } from './BlockWrap';

interface Props {
  blocks: IBlock[];
  focusBlock?: IBlock;
  setFocusBlock: (block?: IBlock) => void;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: 'none',
  background: isDragging ? 'lavender' : undefined,
  ...draggableStyle,
});

export const Viewer = ({ blocks, focusBlock, setFocusBlock }: Props) => {
  const clearFocus = () => setFocusBlock(undefined);

  return (
    <Wrap onClick={clearFocus}>
      <p>Viewer</p>
      <hr />
      <Droppable droppableId="blockList">
        {(droppableProvided) => (
          <BlockList ref={droppableProvided.innerRef}>
            {blocks.map((block, index) => {
              return (
                <Draggable
                  key={block.getId()}
                  draggableId={block.getId()}
                  index={index}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      style={getItemStyle(
                        draggableSnapshot.isDragging,
                        draggableProvided.draggableProps.style
                      )}
                    >
                      <BlockWrap
                        block={block}
                        isFocusBlock={block === focusBlock}
                        setFocusBlock={setFocusBlock}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {droppableProvided.placeholder}
          </BlockList>
        )}
      </Droppable>
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
