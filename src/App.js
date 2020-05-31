import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./home"
import Chat from "./chat"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route Route path = "/chat" >
            <Chat />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}