import styled from 'styled-components/native';

export const Container = styled.Text`
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.primary};

  font-family: roboto_700;
  font-size: 18px;

  padding: 9px 0;
`;
