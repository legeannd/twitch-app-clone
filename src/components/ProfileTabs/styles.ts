import styled from 'styled-components/native';

interface TabProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  background: ${props => props.theme.colors.primary};
`;

export const Tab = styled.TouchableOpacity`
  height: 50px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const TabText = styled.Text<TabProps>`
  font-family: roboto_700;
  border-bottom-width: 2px;
  padding-bottom: 10px;
  color: ${props => props.isActive ? `#762DE4` : props.theme.colors.black};
  border-bottom-color: ${props => props.isActive ? `#762DE4` : `transparent`};

`;
