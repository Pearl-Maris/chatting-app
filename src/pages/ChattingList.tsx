import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import HeaderNav from '../components/HeaderNav'

const Base = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function ChattingList() {
  return (
    <Base>
      <SideBar />
      <Container>
        <HeaderNav title='채팅'/>
      </Container>
    </Base>
  )
}

export default ChattingList