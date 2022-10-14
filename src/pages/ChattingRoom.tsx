import React from 'react'
import styled from 'styled-components'
import Content from '../components/ChattingRoom/Contant'
import Footer from '../components/ChattingRoom/Footer'
import Header from '../components/ChattingRoom/Header'

const Base = styled.div`
`

function ChattingRoom() {
  return (
    <Base>
      <Header />
      <Content />
      <Footer />
    </Base>
  )
}

export default ChattingRoom