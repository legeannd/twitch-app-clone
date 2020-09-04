import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Container = styled.View`
  flex: 1;
  margin: 5px 0;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const StreamThumb = styled.View`  
  flex: 1;  
  width: 160px;
  height: 90px;
  position: relative;
  margin-right: 14px;
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

export const StreamTextBlock = styled.View``;

export const PastBroadcastTitle = styled.Text`
  font-size: 14px;
  font-family: roboto_700;
  margin-right: 14px;
  color: ${props => props.theme.colors.black};
`;

export const Username = styled.Text`
  font-family: roboto_400;
  font-size: 14px;
`;

export const BroadcastMetaText = styled.Text`
  font-family: roboto_400;
  font-size: 14px;
`;
