import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${props => props.theme.colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
  padding-left: 14px;
  padding-right: 14px;
`;

export const PastBroadcastContainer = styled(Container)`
  flex-direction: row;
`;

export const Main = styled.View``;