import React from 'react'
import styled from 'styled-components'

const Base = styled.ul`
  list-style: none;
  margin: 0;
`

const FriendListBlock: React.FC= ({children}) => {
  return <div>{children}</div>
}

export default FriendListBlock