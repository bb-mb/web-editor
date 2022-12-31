import { COLOR } from '@/contants/colors';
import styled from '@emotion/styled';
import { ComponentSelector, Setting, Viewer } from '@/domains/editor/section';

export const EditorHomePage = () => (
  <Wrap>
    <Header>Web Editor</Header>
    <Contents>
      <ComponentSelector />
      <Viewer />
      <Setting />
    </Contents>
  </Wrap>
);

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
