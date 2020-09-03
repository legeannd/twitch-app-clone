import React, { useState } from 'react';

import { Container, Tab, TabText } from './styles';

const ProfileTabs: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Tab>
        <TabText isActive>Home</TabText>
      </Tab>
      <Tab>
        <TabText>About</TabText>
      </Tab>
      <Tab>
        <TabText>Schedule</TabText>
      </Tab>
      <Tab>
        <TabText>Videos</TabText>
      </Tab>
      <Tab>
        <TabText>Clips</TabText>
      </Tab>
      <Tab>
        <TabText>Chat</TabText>
      </Tab>
    </Container>
  );
};

export default ProfileTabs;
