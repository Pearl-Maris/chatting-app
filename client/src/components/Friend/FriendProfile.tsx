import React from 'react'
import styled, { useTheme } from 'styled-components'

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

const ProfileTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfileText = styled.div`
  display: flex;
  align-items: center;
  &: last-child {
    padding-top: 4px;
  }
  p {
    font-size: 10px;
  }
  & b {
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  };
`

interface Props {
  username: string;
  thumnailImg?: string;
  onClick: () => void;
}

const FriendProfile: React.FC<Props> = ({username, thumnailImg, onClick}) => {

  return (
    <Base>
      <UserIamgeWrapper onClick={onClick}>
        <img
          src={thumnailImg || "/logo.png"}
          alt="profile_image"
        />
      </UserIamgeWrapper>
      <ProfileTextWrapper>
        <ProfileText>
          <p>
            <b>{username}</b>
          </p>
        </ProfileText>
        <ProfileText>
          <p>
            친구 상태 메세지
          </p>
        </ProfileText>
      </ProfileTextWrapper>
    </Base>
  )
}

export default FriendProfile