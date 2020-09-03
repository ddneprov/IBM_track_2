import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom";
import { Autorization } from "./Autorization/Autorization";
import { Profile } from "./Profile/Profile";

const useStyles = makeStyles(
  createStyles({
    content: {
      display: 'flex',
      justifyContent: 'center', /*Центрирование по горизонтали*/
    }
  })
);

export const Content: React.FC = () => {
  const classes = useStyles()

  return (<div className={classes.content}>
    <Switch>
      <Route exact path='/Profile' render={() => <Profile />} />
      <Route exact path='/Auth' render={() => <Autorization />} />
      <Route path='*'
          render={() => <div>404 NOT FOUND</div>} />
    </Switch>
  </div>)
}