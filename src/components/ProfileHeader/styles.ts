import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 100px;
`;

export const HeaderBannerButtons = styled.View`
  margin: -90px 14px 80px 14px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BannerButtonContainer = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.7);
  width: 28px;
  height: 28px;
  border-radius: 14px;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 14px;
  margin-top: -30px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border: 2px;
  border-color: ${props => props.theme.colors.primary}; 
  border-radius: 40px;
`;

export const Info = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const ProfileName = styled.Text`
  font-family: roboto_700;
  font-size: 22px;
  color: ${props => props.theme.colors.black};
`;

export const ProfileLastLive = styled.Text`
  color: ${props => props.theme.colors.black};
`;

export const LastLiveDate = styled.Text`
  font-family: roboto_700;
  color: ${props => props.theme.colors.black};
`;

export const ProfileFollowers = styled.Text`
  font-family: roboto_700;
  margin-left: 14px;
  margin-top: 10px;
  color: ${props => props.theme.colors.black};
`;

export const ManageProfileButtons = styled.View`
  margin: 5px 14px;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 100%;
  height: 28px;
  margin: 5px 0 0 0;
  background: #DCDEDB;
  border: 0px solid;
  border-radius: 5px;
  padding-top: 5px;
  justify-content: center;
  flex-direction: row;
`;

export const ProfileButtonText = styled.Text`
  font-family: roboto_700;
`;
