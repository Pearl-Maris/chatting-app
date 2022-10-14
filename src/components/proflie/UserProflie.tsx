import React from 'react'
import styled from 'styled-components'

import { FaPen } from "react-icons/fa";

const Base = styled.div`
  height: 40px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.mint};
  display: flex;
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
`

const ProfileText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  & b {
    font-weight: bold;
    cursor: pointer;
  };
`

const Item = styled.button`
  color: ${({ theme }) => theme.palette.mint};
  background-color: transparent;
  border: none;
  font-size: 1em;
  padding: 4px;
  cursor: pointer;
`

const UserProflie: React.FC = () => {
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
            <b>유저닉네임</b>
          </p>
        </ProfileText>
      </ProfileTextWrapper>
      <Item>
          <FaPen />
        </Item>
    </Base>
  )
}

export default UserProflie