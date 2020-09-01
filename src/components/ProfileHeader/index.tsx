import React from 'react';

import bannerImage from '../../images/profile_banner.jpeg';

import { 
  Container, 
  Banner, 
  HeaderBannerButtons, 
  BannerButton, 
  ProfileInfo, 
  Avatar, 
  Info, 
  ProfileName, 
  ProfileLastLive, 
  LastLiveDate, 
  ProfileFollowers,
  ManageProfileButtons,
  ProfileButton,
} from './styles';

const ProfileHeader: React.FC = () => {
  return (
    <Container>
      <Banner source={bannerImage}/>

      <HeaderBannerButtons>
        <BannerButton>back</BannerButton>
        <BannerButton>3 dots</BannerButton>
      </HeaderBannerButtons>
      
      <ProfileInfo>
        <Avatar />
        
        <Info>
          <ProfileName>legeannd</ProfileName>
          <ProfileLastLive>Last live 
            <LastLiveDate>August 27</LastLiveDate>
          </ProfileLastLive>
        </Info>
      
      </ProfileInfo>
      
      <ProfileFollowers>20k followers</ProfileFollowers>
      
      <ManageProfileButtons>
        <ProfileButton>Go Live</ProfileButton>
        <ProfileButton>View Dashboard</ProfileButton>
      </ManageProfileButtons>

    </Container>
  );
};

export default ProfileHeader;
