import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { Container, StreamThumb, StreamThumbImage, StreamThumbDuration, PastBroadcastText, PastBroadcastTitle, Username, BroadcastMetaText } from './styles';

export interface SizeProps {
  componentWidth?: string | number;
  componentHeight?: string | number;
  textSize?: string;
  titleSize?: string;

}

const PastBroadcast: React.FC<SizeProps> = ({ componentWidth, componentHeight, textSize, titleSize }) => {
  return (
    <Container>
      <StreamThumb componentWidth={componentWidth} componentHeight={componentHeight} >
        <StreamThumbImage source={streamThumbnail}/>
        <StreamThumbDuration>2:25:17</StreamThumbDuration>
      </StreamThumb>

      <PastBroadcastText textSize={textSize} >Past Broadcast</PastBroadcastText>
      <PastBroadcastTitle titleSize={titleSize} numberOfLines={1} >RECRIANDO A PÁGINA DE PERFIL DA TWITCH</PastBroadcastTitle>
      <Username>legeannd</Username>
      <BroadcastMetaText>5m views {'\u00B7'} today</BroadcastMetaText>
    </Container>
  );
};

export default PastBroadcast;
