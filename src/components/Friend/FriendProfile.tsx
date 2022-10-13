import React from 'react'
import styled from 'styled-components'

const Base = styled.div`
  display: flex;
  padding: 10px 0;
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
    font-size: 12px;
  }
  & b {
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  };
`

const FriendProfile: React.FC = () => {
  return (
    <Base>
      <UserIamgeWrapper>
        <img
          src="/assets/images/profile.png"
          alt="profile_image"
        />
      </UserIamgeWrapper>
      <ProfileTextWrapper>
        <ProfileText>
          <p>
            <b>친구프로필</b>
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