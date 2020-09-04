import React from 'react';
import { FlatList } from 'react-native';

import { Wrapper, Container, Main, PastBroadcastContainer } from './styles';
import ProfileHeader from '../../components/ProfileHeader';
import CategoryList from '../../components/CategoryList';
import ProfileTabs from '../../components/ProfileTabs';
import PastBroadcast from '../../components/PastBroadcast';
import ProfilePageCategoriesTitle from '../../components/ProfilePageCategoriesTitle';
import RecentBroadcasts from '../../components/RecentBroadcasts';

interface Item {
  key: string;
  render: () => JSX.Element;
}

const Profile: React.FC = () => {
  const { data } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'C1',
        render: () => <ProfileHeader />
      },
      {
        key: 'C2',
        render: () => (<Container><ProfileTabs /></Container>)
      },
      {
        key: 'C3',
        render: () => (
          <Container>
            <PastBroadcast 
              componentWidth="100%" 
              componentHeight="240px" 
              textSize="18px"
              titleSize="22px"
            />
          </Container>)
      },
      {
        key: 'C4',
        render: () => (
          <PastBroadcastContainer>
            <PastBroadcast 
              componentWidth="95%" 
              componentHeight="110px" 
              textSize="16px"
              titleSize="20px"
            />
            <PastBroadcast 
              componentWidth="95%" 
              componentHeight="110px" 
              textSize="16px"
              titleSize="20px"
            />
          </PastBroadcastContainer>)
      },
      {
        key: 'RECENT_BROADCASTS',
        render: () => (<Container><ProfilePageCategoriesTitle>Recent broadcasts</ProfilePageCategoriesTitle></Container>)
      },
      {
        key: 'C5',
        render: () => (<Container><RecentBroadcasts /></Container>)
      },
      {
        key: 'STREAMS_BY_CATEGORY',
        render: () => (<Container><ProfilePageCategoriesTitle>legeannd's stream by category</ProfilePageCategoriesTitle></Container>)
      },
      {
        key: 'C6',
        render: () => (<Container><CategoryList /></Container>)
      }
    ];

    return {
      data: items
    };
  }, []);

  return (
    <Wrapper>      
        <Main>
          <FlatList<Item> 
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={[1]}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
    </Wrapper>
  );
};

export default Profile;
