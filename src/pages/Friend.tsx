import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import HeaderNav from '../components/HeaderNav'
import FriendProfile from '../components/Friend/FriendProfile'
import UserProflie from '../components/proflie/UserProflie'
import { useQuery } from 'react-query'

const Base = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const ProfileArea = styled.div`
  padding: 10px 20px;
`

const Friend: React.FC = () => {

  const { data: profileData } = useQuery('fetchMyProfile')
  const { data: userData } = useQuery('fetchUserList')

  return (
    <Base>
      <SideBar />
      <Container>
        <HeaderNav title='친구'/>
        <ProfileArea>
          {profileData && <UserProflie username={profileData.data.username} />}
          {
            userData.data.rows.map(row => (
              <div>
                <FriendProfile
                  key={row.id}
                  thumnailImg={row.thumnailImg}
                  username={row.username}
                  onClick={() => handleChatRoomCreate(row.id)}
                />
              </div>
            ))
          }
        </ProfileArea>
      </Container>
    </Base>
  )
}

export default Friend