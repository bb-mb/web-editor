import { IBlock } from '@/domains/blocks';
import styled from '@emotion/styled';
import { useCallback } from 'react';

interface Props {
  focusBlock?: IBlock;
}

export const Setting = ({ focusBlock }: Props) => {
  const SettingComponent = useCallback(() => {
    return focusBlock?.renderSetting() ?? null;
  }, [focusBlock]);

  return (
    <Wrap>
      <span>setting</span>
      <hr />
      <SettingComponent />
    </Wrap>
  );
};

export const Wrap = styled.div`
  width: 250px;
`;
