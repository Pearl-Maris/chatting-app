import React from 'react'
import styled from 'styled-components'


const Base = styled.div`
  display: flex;
  padding: 10px 0;
  cursor: pointer;
`

const UserIamgeWrapper = styled.div`
  & img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
  }
`

const RoomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfileText = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 10px;
  }
  & b {
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  };
`

const MessageText = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  p {
    font-size: 10px;
  }
  & b {
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  };
`

const ChatBlock: React.FC = () => {
  return (
    <Base>
      <UserIamgeWrapper>
        <img
          src="/assets/images/profile.png"
          alt="profile_image"
        />
      </UserIamgeWrapper>
      <RoomWrapper>
        <ProfileText>
          <p>
            <b>친구이름</b>
          </p>
        </ProfileText>
        <MessageText>
          <p>
            메세지 상태
          </p>
        </MessageText>
      </RoomWrapper>
    </Base>
  )
}

export default ChatBlock