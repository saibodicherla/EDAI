import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import TextBox from '../common/TextBox'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

const Div = styled.div({
  position: "absolute",
  top: "30vh",
  textAlign: "center",
  width: "70vw",
  margin: "15vw",
})

export default function Home(props) {
  const history = useHistory()
  const [textValue, setTextValue] = useState("")
  
  const getName = () => {
    const userName = localStorage.getItem("userName")
    if (userName) {
      console.log(userName)
      setTextValue(userName)
    }
  }

  useEffect(() => {
    getName()
  }, [])

  return (
    <Container>
        <Div>
            <TextBox
                defaultVal={textValue}
                placeholder="Please enter your name"
                onIconClick={userName => {
                    localStorage.setItem("userName", userName)
                    history.push('/chat')
                }}
            />
        </Div>
    </Container>
  )
}
