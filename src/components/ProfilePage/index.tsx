import React from 'react';
import Feed from '../Feed';
import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    FollowAge,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>


              <h1>Giovani Canova Foltran</h1>
              <h2>@gi_canova</h2>

              <p>
                  Lorem Ipsum
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 29 de dezembro de 2002
                  </li>
              </ul>
              <FollowAge>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672 </strong> seguidores
                </span>
              </FollowAge>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;