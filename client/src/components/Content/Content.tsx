import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
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
        {/* <Autorization /> */}
        <Profile />
    </div>)
}