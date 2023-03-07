import React from "react"
import { Route, Switch } from "react-router-dom"
import NewsList from "../components/NewsList"

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={NewsList} />
    </Switch>
  )
}

export default Routes
