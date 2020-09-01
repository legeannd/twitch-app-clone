import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import streamAvatar from '../../images/stream_avatar.png';

import { Container, Avatar, AvatarImage, OnlineStatus, RightSide, Button } from './styles';

import { useTheme } from '../../hooks/theme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { navigate } = useNavigation();

  const handleNavigateToProfile = useCallback(() => {
    navigate('Profile');
  }, []);

  return (
    <Container>
      <Avatar onPress={handleNavigateToProfile}>
        <AvatarImage  source={streamAvatar}/>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button onPress={() => toggleTheme()}>
          <Feather
            name={theme.name === 'dark' ? 'sun' : 'moon'}
            size={26} 
            color={theme.colors.black}
          />
        </Button>

        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={theme.colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={theme.colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={theme.colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
