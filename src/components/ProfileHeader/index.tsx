import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import streamAvatar from '../../images/stream_avatar.png';
import bannerImage from '../../images/profile_banner.jpeg';

import { 
  Container, 
  Banner, 
  HeaderBannerButtons, 
  BannerButtonContainer, 
  ProfileInfo, 
  Avatar, 
  Info, 
  ProfileName, 
  ProfileLastLive, 
  LastLiveDate, 
  ProfileFollowers,
  ManageProfileButtons,
  ProfileButton,
  ProfileButtonText,
} from './styles';

const ProfileHeader: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Banner source={bannerImage}/>

      <HeaderBannerButtons>
        <BannerButtonContainer onPress={() => goBack()} >
          <Feather name="chevron-left" size={24} style={{ color: "#fff"}} />
        </BannerButtonContainer>

        <BannerButtonContainer>
          <Feather name="more-horizontal" size={24} style={{ color: "#fff"}} />
        </BannerButtonContainer>
      </HeaderBannerButtons>
      
      <ProfileInfo>
        <Avatar source={streamAvatar}/>
        
        <Info>
          <ProfileName>legeannd</ProfileName>
          <ProfileLastLive>Last live 
            <LastLiveDate> August 27</LastLiveDate>
          </ProfileLastLive>
        </Info>
      
      </ProfileInfo>
      
      <ProfileFollowers>20k followers</ProfileFollowers>
      
      <ManageProfileButtons>
        <ProfileButton>
          <Feather name="video" size={18} style={{ marginRight: 10}}/>
          <ProfileButtonText>Go Live</ProfileButtonText>
        </ProfileButton>

        <ProfileButton>
          <ProfileButtonText>View Dashboard</ProfileButtonText>
        </ProfileButton>
      </ManageProfileButtons>

    </Container>
  );
};

export default ProfileHeader;
