import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import HeaderNav from '../components/HeaderNav'
import ChatBlock from '../components/ChattingList/ChatBlock'

const Base = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MessageArea = styled.div`
  padding: 10px 20px;
`

function ChattingList() {
  return (
    <Base>
      <SideBar />
      <Container>
        <HeaderNav title='채팅'/>
        <MessageArea>
          <ChatBlock />
        </MessageArea>
      </Container>
    </Base>
  )
}

export default ChattingList