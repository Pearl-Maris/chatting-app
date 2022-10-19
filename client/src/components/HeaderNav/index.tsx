import React from 'react'
import styled from 'styled-components'

import { FaCommentMedical } from 'react-icons/fa'

const Base = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 14px 20px;
  justify-content: space-between;
  box-sizing: border-box;
`

const Title =styled.h1`
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.4em;
  font-weight: bold;
`

const Item = styled.button`
  font-size: 1.6em;
  color: ${({ theme }) => theme.palette.mint};
  background-color: transparent;
  border: none;
`

interface Props {
  title: string
}

const HeaderNav: React.FC<Props> = ({ title }) => {
  return (
    <Base>
      <Title>{title}</Title>
      <Item>
        <FaCommentMedical />
      </Item>
    </Base>
  )
}

export default HeaderNav