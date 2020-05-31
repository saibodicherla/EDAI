import styled from 'styled-components'

const ChatBlueIcon = require('./3.png')
const ChatGrayIcon = require('./4.png')

const Div = styled.div({
  position: "fixed",
  bottom: "0",
  textAlign: "center",
  width: "82vw",
  maxWidth: "855px",
  backgroundColor: "#fff",
  margin: "10px",
  zIndex: 9999,
})

const ChatComp = styled.div({
    width: "100vw",
    height: "100vh",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    textAlign: "center",
})

const ChatScrollWindow = styled.div({
    width: "100vw",
    height: "86vh",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 0 50px 0",
    overflowY: "scroll",
})

const ReceivedCmp = styled.div`
    width: fit-content;
    max-width: 450px;
    text-align: left;
    padding-left: 20px;
    clear: both;
    @media(max-width: 768px) {
        max-width: 300px;
    }
`

const Message = styled.div({
    maxWidth: "inherit",
    padding: "12px",
    backgroundColor: "#E9E9EB",
    borderRadius: "20px",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "5px",
    position: "relative",
})

const SentCmp = styled.div `
    width: fit-content;
    max-width: 450px;
    text-align: right;
    clear: both;
    float: right;
    padding-right: 20px;
    @media(max-width: 768px) {
        max-width: 300px;
    }
`

const SentMessage = styled.div({
    maxWidth: "inherit",
    padding: "12px",
    backgroundColor: "#2190FC",
    color: "#FFF",
    borderRadius: "20px",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "5px",
    position: "relative",
})

const BlueIcon = styled.div({
    backgroundImage: "url(" + ChatBlueIcon + ")",
    backgroundRepeat: "no-repeat",
    height: "20px",
    width: "26px",
    position: "absolute",
    bottom: "-10px",
    right: "-7px",
})

const GrayIcon = styled.div({
    backgroundImage: "url(" + ChatGrayIcon + ")",
    backgroundRepeat: "no-repeat",
    height: "20px",
    width: "26px",
    position: "absolute",
    bottom: "-10px",
    left: "-3px",
})

const Title = styled.div({
    color: "rgb(0,0,0,0.7)",
    padding: "2px 15px",
    fontSize: "20px",
    fontWeight: 600,
})


export {
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
}
