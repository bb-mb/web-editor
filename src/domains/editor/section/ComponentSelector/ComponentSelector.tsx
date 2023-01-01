import { blockList } from '@/contants/block';
import { createDefaultBlock } from '@/domains/blocks';
import styled from '@emotion/styled';
import { Draggable, Droppable } from '@hello-pangea/dnd';

export const ComponentSelector = () => {
  return (
    <Wrap>
      <p>컴포넌트 선택 영역</p>
      <hr />
      <Droppable droppableId="selector" isDropDisabled>
        {(droppableProvider) => {
          return (
            <List ref={droppableProvider.innerRef}>
              {blockList.map((block) => {
                const Preview = createDefaultBlock(block.id)!.render;

                return (
                  <Draggable
                    key={block.name}
                    draggableId={block.name}
                    index={block.id}
                  >
                    {(provided, snapshot) => (
                      <>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {snapshot.isDragging ? (
                            <Preview />
                          ) : (
                            <Item>{block.name}</Item>
                          )}
                        </div>
                        {snapshot.isDragging && <Item>{block.name}</Item>}
                      </>
                    )}
                  </Draggable>
                );
              })}
              {droppableProvider.placeholder}
            </List>
          );
        }}
      </Droppable>
    </Wrap>
  );
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
  return {
    ...draggableStyle,
    width: 'auto',
    minWidth: 250,
    height: 'auto',
    userSelect: 'none',
    background: isDragging ? 'lavender' : undefined,
  };
};

const Wrap = styled.div`
  width: 250px;
`;

const List = styled.div``;

const Item = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid black;
  background-color: white;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    background-color: lavender;
  }
`;
