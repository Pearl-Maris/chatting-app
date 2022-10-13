import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import HeaderNav from '../components/HeaderNav'
import FriendProfile from '../components/Friend/FriendProfile'
import UserProflie from '../components/proflie/UserProflie'

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
  return (
    <Base>
      <SideBar />
      <Container>
        <HeaderNav title='친구'/>
        <ProfileArea>
          <UserProflie />
          <FriendProfile />
        </ProfileArea>
      </Container>
    </Base>
  )
}

export default Friend