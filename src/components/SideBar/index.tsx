import React from 'react';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';


import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>
      
      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSugestion 
              name="Célia Canova"
              nickname="@celia_canova"
            />,
            <FollowSugestion 
              name="Valdir Foltran"
              nickname="@valdir_foltran"
            />,
            <FollowSugestion 
              name="João Pedro"
              nickname="@joao_pedro"
            />,
          ]}
        />

        <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
