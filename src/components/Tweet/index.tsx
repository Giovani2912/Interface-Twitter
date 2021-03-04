import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>

        <Avatar />
        <Content>

          <Header>
            <strong>Giovani</strong>
            <span>@gi_canova</span>
            <Dot />
            <time>04 de março</time>
          </Header>
          
          <Description>
            Jogando como nunca e vencendo como sempre.
          </Description>

          <ImageContent />

          <Icons>

            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              180.000
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
