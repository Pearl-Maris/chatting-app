import React from 'react'
import styled from 'styled-components'
import { UserResponse } from '../../types/user'

// const Base = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: ${({ theme }) => theme.palette.cream};
// `

const ChatWrapper = styled.div`
  display: inline-block;
  padding: 8px 10px;
  max-width: 70%;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(93, 93, 93, 0.1);
  word-wrap: break-word;
  white-space: pre-wrap;
`

const RightBlock = styled.div`
  & ${ChatWrapper} {}
`

const LeftBlock = styled.div``

const NameBox = styled.div`
  margin-bottom: 4px;
`

interface ChatProps {
  msg: string;
}

export const Chat: React.FC<ChatProps> = ({msg}) => {
  return (
    <ChatWrapper>
      {msg}
    </ChatWrapper>
  )
}

// 내가 보낸 채팅
export const MyChat: React.FC<ChatProps> = props => {
  return (
    <React.Fragment>
      <RightBlock>
        <div>
          <Chat {...props} />
        </div>
      </RightBlock>
    </React.Fragment>
  )
}

interface FriendChatProps {
  user: UserResponse;
  msg: string;
}

// 친구가 보낸 채팅
export const FriendChat: React.FC<ChatProps> = props => {
  return (
    <LeftBlock>
      <div>
        <Chat {...props} />
      </div>
    </LeftBlock>
  )
}

export const FriendChatWithImg: React.FC<FriendChatProps> = props => {
  const { user } = props
  return (
    <React.Fragment>
      <LeftBlock>
        <img src="" alt="thumnail_img" />
        <NameBox>{user.name}</NameBox>
        <div>
          <Chat {...props}/>
        </div>
      </LeftBlock>
    </React.Fragment>
  )
}