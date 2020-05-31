import React, {
  useState,
  useEffect,
  useRef,
} from 'react'
import Container from '../common/Container'
import TextBox from '../common/TextBox'
import {
  Div,
  ChatComp,
  ChatScrollWindow,
  ReceivedCmp,
  Message,
  SentCmp,
  SentMessage,
  BlueIcon,
  GrayIcon,
  Title,
} from './ChatStyles'
import config from '../.env/config.json'

const apiEndPoint = config.apiEndPoint + config.storage

export default function Chat() {
  const [messageList, setMessageList] = useState([])
  const [userName, setUserName] = useState('')
  const scrollChatElement = useRef(null)

  const getName = () => {
    const tmpUserName = localStorage.getItem('userName')
    if (tmpUserName) {
      setUserName(tmpUserName)
    }
  }

  let lastMessageLen = 0

  const getUpdatedMessage = () => {
    fetch(apiEndPoint)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          // alert(result.error)
        } else {
          if (lastMessageLen !== result.length) {
            lastMessageLen = result.length
            setMessageList(result)
            setTimeout(() => {
              if (scrollChatElement.current) {
                scrollChatElement.current.scrollTop = scrollChatElement.current.scrollHeight
              }
            }, 50);
          }
          setTimeout(getUpdatedMessage, 1000);
        }
      });
  }

  useEffect(() => {
    getName()
    getUpdatedMessage()
  },)

  let latestMessageBy = ''
  let messageBox = ''
  let isDisplayIcon
  return (
    <Container>
      <ChatComp>
        <ChatScrollWindow ref={scrollChatElement}>
          {
            messageList.map((item, key) => {
              isDisplayIcon = true
              if (
                messageList[key + 1]
                    && messageList[key + 1].user === item.user
              ) {
                isDisplayIcon = false
              }
              if (item.user === userName) {
                messageBox = (
                  <SentCmp key={key}>
                    {
                        latestMessageBy === item.user
                          ? ''
                          : <Title>{item.user}</Title>
                    }
                    <SentMessage>
                      {item.message}
                      { isDisplayIcon && <BlueIcon /> }
                    </SentMessage>
                  </SentCmp>
                )
              } else {
                messageBox = (
                  <ReceivedCmp key={key}>
                    {
                                latestMessageBy === item.user
                                  ? ''
                                  : <Title>{item.user}</Title>
                            }
                    <Message>
                      {item.message}
                      { isDisplayIcon && <GrayIcon /> }
                    </Message>
                  </ReceivedCmp>
                )
              }
              latestMessageBy = item.user
              return messageBox
            })
          }
        </ChatScrollWindow>
        <Div>
          <TextBox
            defaultVal=""
            placeholder="Please enter message"
            onIconClick={(typeMessage) => {
              fetch(apiEndPoint, {
                method: 'POST',
                body: JSON.stringify({
                  user: localStorage.getItem('userName'),
                  message: typeMessage,
                  time: (new Date()).getTime(),
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data !== 'ok') {
                    alert(`Error In sending Message : ${data.error}`);
                  }
                });
            }}
          />
        </Div>
      </ChatComp>
    </Container>
  )
}
