import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom";
import { Autorization } from "./Autorization/Autorization";
import { Profile } from "./Profile/Profile";
import { RouterMap } from "../../base/types/RouterMap";
import { PilotsList } from "./PilotsList/PilotsList";

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
      <Route exact path={`/${RouterMap.PilotsList}`} render={() => <PilotsList />} />
      <Route exact path={`/${RouterMap.Profile}`} render={() => <Profile />} />
      <Route exact path={`/${RouterMap.Profile}/:id`} render={() => <Profile />} />
      <Route exact path={`/${RouterMap.Auth}`} render={() => <Autorization />} />
      <Route path='*'
          render={() => <div>404 NOT FOUND</div>} />
    </Switch>
  </div>)
}