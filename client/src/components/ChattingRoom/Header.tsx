import React from 'react'
import styled from 'styled-components'

import { FaChevronLeft } from 'react-icons/fa'

const Base = styled.div`
  width: calc(100% / 1em);
  height: 40px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.palette.cream};
  box-shadow: 0 0 10px 0 rgba(93, 93, 93, 0.1);
`
const Wrapper = styled.div`
  width: calc(100% / 6);
  align-items: center;
  & button {
    font-size: 1em;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.mint};
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  & span {
    display: block;
    position: absolute;
    top: 2px;
    left: calc(100% / 2 / 1.4);
    padding: 10px;
    font-size: em;
    color: ${({ theme }) => theme.palette.black};
  }
`

const Header: React.FC = () => {
  return (
    <Base>
      <Wrapper>
        <button type='button'>
          <FaChevronLeft />
        </button>
        <span>상대이름</span>
      </Wrapper>
    </Base>
  )
}

export default Header