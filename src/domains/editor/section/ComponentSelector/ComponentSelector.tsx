import styled from '@emotion/styled';
import { Draggable, Droppable } from '@hello-pangea/dnd';

const itemList = [
  { type: 'text', name: '텍스트' },
  { type: 'image', name: '이미지' },
];

export const ComponentSelector = () => {
  return (
    <Wrap>
      <p>컴포넌트 선택 영역</p>
      <hr />
      <Droppable droppableId="selector" isDropDisabled>
        {(droppableProvider) => {
          return (
            <List ref={droppableProvider.innerRef}>
              {itemList.map((item, index) => {
                return (
                  <Draggable
                    key={item.name}
                    draggableId={item.name}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <Item>{item.name}</Item>
                        </div>
                        {snapshot.isDragging && <Item>{item.name}</Item>}
                      </>
                    )}
                  </Draggable>
                );
              })}
            </List>
          );
        }}
      </Droppable>
    </Wrap>
  );
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
