import React from 'react'
import { Sidebar, ChannelBar, Chat } from '../../components'
import styled from 'styled-components'

const Board = () => {
  return (
    <Container>
      <Sidebar />
      <ChannelBar />
      <Chat />
    </Container>
  )
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`
export default Board
