import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { Container, StreamThumb, StreamThumbImage, StreamThumbDuration, PastBroadcastText, PastBroadcastTitle, Username, BroadcastMetaText } from './styles';

const PastBroadcast: React.FC = () => {
  return (
    <Container>
      <StreamThumb>
        <StreamThumbImage source={streamThumbnail}/>
        <StreamThumbDuration>2:25:17</StreamThumbDuration>
      </StreamThumb>

      <PastBroadcastText>Past Broadcast</PastBroadcastText>
      <PastBroadcastTitle>RECRIANDO A PÁGINA DE PERFIL DA TWITCH</PastBroadcastTitle>
      <Username>legeannd</Username>
      <BroadcastMetaText>5m views {'\u00B7'} today</BroadcastMetaText>
    </Container>
  );
};

export default PastBroadcast;
