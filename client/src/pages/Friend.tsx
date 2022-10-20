import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import HeaderNav from '../components/HeaderNav'
import FriendProfile from '../components/Friend/FriendProfile'
import UserProflie from '../components/proflie/UserProflie'
import { useMutation, useQuery } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { fetchMyProfile, fetchUserList } from '../apis/userApi'
import { fetchChatRoomList, makeChatRoom, MakeChatRoomRequest } from '../apis/roomApi'
import { useNavigate } from 'react-router-dom'


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
  
  const navigate = useNavigate()

  // get types
  const { data: profileData } = useQuery<AxiosResponse, AxiosError>('fetchMyProfile', fetchMyProfile)
  const { data: userData } = useQuery<AxiosResponse, AxiosError>('fetchUserList', fetchUserList)

  // 채팅방 생성 및 이미 생성된 채팅방이 있는지 확인
  const { data: chatRoomListData } = useQuery<AxiosResponse, AxiosError>('fetchChatRoomList', fetchChatRoomList)
  const mutation = useMutation("makeChatRoom", (request: MakeChatRoomRequest) => makeChatRoom(request) )
  const handleChatRoomCreate = (opponentId: string) => {
    const chatRoom = chatRoomListData?.data.find(chatRoom => chatRoom.opponentId === opponentId)
    if (chatRoom) {
      navigate(`/room/${chatRoom.id}`)
    } else {
      mutation.mutate({
        opponentId
      }, {
        onSuccess: () => {
          navigate(`/room/${data.data.id}`)
        }
      })
    }
  }

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