import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 5px 0;
`;

export const StreamThumb = styled.View`  
  flex: 1;  
  width: 100%;
  height: 240px;
  margin-bottom: 10px;
  position: relative;
`;

export const StreamThumbDuration = styled.Text`
  background: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  color: white;
  position: absolute;
  margin: 10px 0 0 10px;
  top: 0;
  left: 0;
  padding: 3px;
  border-radius: 5px;
`;

export const StreamThumbImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PastBroadcastText = styled.Text`
  font-size: 18px;
  font-family: roboto_700;
  color: #762DE4;
`;

export const PastBroadcastTitle = styled.Text`
  font-size: 22px;
  font-family: roboto_700;
  color: ${props => props.theme.colors.black};
`;

export const Username = styled.Text`
  font-family: roboto_400;
`;

export const BroadcastMetaText = styled.Text`
  font-family: roboto_400;
`;
