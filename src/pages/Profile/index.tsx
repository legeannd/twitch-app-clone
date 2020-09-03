import React from 'react';
import { FlatList } from 'react-native';

import { Wrapper, Container, Main } from './styles';
import ProfileHeader from '../../components/ProfileHeader';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ProfileTabs from '../../components/ProfileTabs';

interface Item {
  key: string;
  render: () => JSX.Element;
}

const Profile: React.FC = () => {
  const { data } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'TAB_HEADER',
        render: () => <ProfileHeader />
      },
      {
        key: 'TAB_HEADER2',
        render: () => (<Container><ProfileTabs /></Container>)
      },
      {
        key: 'TAB_HEADER3',
        render: () => (<Container><CategoryList /></Container>)
      },
      {
        key: 'TAB_HEADER4',
        render: () => (<Container><StreamList /></Container>)
      },
      {
        key: 'TAB_HEADER5',
        render: () => (<Container><StreamList /></Container>)
      },
      {
        key: 'TAB_HEADER6',
        render: () => (<Container><StreamList /></Container>)
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
