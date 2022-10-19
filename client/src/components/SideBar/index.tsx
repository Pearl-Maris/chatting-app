import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaComment } from 'react-icons/fa'

const Base = styled.div`
  background-color: ${({ theme }) => theme.palette.cream};
  width: 64px;
  height: 100vh;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`

const Item = styled.button`
  color: rgba(34, 200, 168, 0.4);
  font-size: 1.6em;
  padding: 2px;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  &: last-child {
    margin-top: 8px;
  }
  &: hover {
    color: ${({ theme }) => theme.palette.mint};
  };
  &: active {
    color: ${({ theme }) => theme.palette.mint};
  };
`

const SideBar: React.FC = () => {

  return (
    <Base>
      <ItemWrapper>
        <Link to='/friend'>
          <Item>
            <FaUserAlt
              title='친구목록'
            />
          </Item>
        </Link>
        <Link to='/room'>
          <Item>
            <FaComment
              title='채팅목록'
            />
          </Item>
        </Link>
      </ItemWrapper>
    </Base>
  )
}

export default SideBar