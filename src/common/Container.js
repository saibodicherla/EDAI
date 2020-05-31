import React from 'react'
import styled from 'styled-components'

const Box = styled.div({
  backgroundColor: '#E9E9EB',
  height: '100vh',
  width: '100vw',
  textAlign: 'center',
  margin: '0',
})

// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (<Box>{children}</Box>)
}
