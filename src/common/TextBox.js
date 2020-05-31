import React, {
    useState,
    useRef,
} from 'react'
import styled from 'styled-components'
import { UpArrowCircle } from '@styled-icons/boxicons-solid/UpArrowCircle'

const UpIconGray = styled(UpArrowCircle)`
  position: absolute;
  right: -18px;
  height: 42px;
  color: #6a6a6a;
  top: 2px;
  z-index: 999;
`

const UpIconBlue = styled(UpArrowCircle)`
  position: absolute;
  right: -18px;
  height: 42px;
  color: #067BFB;
  top: 2px;
  z-index: 999;
`

const Input = styled.input`
  padding: 0.5em;
  color: "#000";
  background: "#FFF";
  border-radius: 25px;
  font-size: 20px;
  width: 100%;
  border: 2px solid #DEDEDF;
  &: focus, &: focus, &: focus, &: focus {
    outline: none;
  }
`

export default function TextBox(props) {
    const [textValue, setTextValue] = useState("")
    const textElement = useRef(null)

    const submitTextBox = () => {
        if (textValue === "" || !textValue) {
            alert("Please enter value.")
        } else {
            setTextValue("")
            textElement.current.value = ""
            props.onIconClick(textValue);
        }
    }
    return (
      <div>
        <Input
            onChange={(e) => {
                setTextValue(e.target.value)
            }}
            defaultValue={props.defaultVal}
            placeholder={props.placeholder}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    submitTextBox()
                }
            }}
            ref={textElement}
        />
        {
            textValue === "" || !textValue
                ? <UpIconGray />
                : <UpIconBlue
                    onClick={submitTextBox}
                />
        }
      </div>
    )
}
