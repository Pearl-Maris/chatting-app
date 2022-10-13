import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../apis/userApi'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Reservation } from '../assets/logo.svg'

const Base = styled.div`
  background-color: ${({ theme }) => theme.palette.cream};
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  whiteSpace: nowrap;
  padding-top: 150px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoWrapper = styled.div`
  margin: 0 auto;
`

const FormWrapper = styled.div`
  width: 260px;
  height: 100%;
  margin: 0 auto;
  margin-top: 40px;
  box-sizing: border-box;
`

const Input = styled.input`
  margin: 0;
  padding: 0 8px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`

const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.mint};
  background-opacity: 0.5;
  margin: 0;
  padding: 0;
  border: none;
  width: 260px;
  height: 48px;
  color: ${({ theme }) => theme.palette.cream};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  &:active {
    opacity: 0.7;
  }
`

const Login: React.FC = (props) => {
  const navigate = useNavigate()
  const mutation = useMutation((username: string) => login({username}))
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const MAX_LENGTH = 30;

  const UserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }
  const handleLogin = () => {
    mutation.mutate(userId, {
      onSuccess: (data) => {
        if (data?.statusText === 'OK') {
          navigate('/friends')
        }
      }
    })
  }

  return (
    <Base>
      <Container>
        <LogoWrapper>
          <Reservation width="100" height="100" />
        </LogoWrapper>
        <FormWrapper>
          <Input
            type="text"
            value={userId}
            placeholder='이메일'
            maxLength={MAX_LENGTH}
            onChange={UserIdChange}
          />
          <Input 
            type="password"
            value={password}
            placeholder='비밀번호'
          />
        </FormWrapper>
        <ButtonWrapper>
          <Button onClick={handleLogin}>로그인</Button>
        </ButtonWrapper>
      </Container>
    </Base>
  )
}

export default Login