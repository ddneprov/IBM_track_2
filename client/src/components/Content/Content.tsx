import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom";
import { RouterMap } from "../../base/types/RouterMap";
import { ProfileContainer } from "./Profile/ProfileContainer";
import { AutorizationContainter } from "./Autorization/AutorizationContainer";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";

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
      <Route exact path={`/${RouterMap.Profile}`} render={() => <ProfileContainer />} />
      <Route exact path={`/${RouterMap.Profile}/:userId`} render={() => <ProfileContainer />} />
      <Route exact path={`/${RouterMap.Auth}`} render={() => <AutorizationContainter />} />
      <Route path='*'
          render={() => <NotFoundPage />} />
    </Switch>
  </div>)
}