import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { Wrapper, Container, StreamThumb, StreamThumbImage, StreamThumbDuration, StreamTextBlock, PastBroadcastTitle, Username, BroadcastMetaText } from './styles';

const RecentBroadcasts: React.FC = () => {
  const Stream = () => (
    <Container>
      <StreamThumb>
        <StreamThumbImage source={streamThumbnail}/>
        <StreamThumbDuration>2:25:17</StreamThumbDuration>
      </StreamThumb>

      <StreamTextBlock>
        <PastBroadcastTitle numberOfLines={1} >RECRIANDO A PÁGINA DE PERFIL DA TWITCH</PastBroadcastTitle>
        <Username>Science & Technology</Username>
        <BroadcastMetaText>5m views {'\u00B7'} today</BroadcastMetaText>
      </StreamTextBlock>
    </Container>
  )

  return (
    <Wrapper>
      <Stream />
      <Stream />
      <Stream />
    </Wrapper>
  );
};

export default RecentBroadcasts;
