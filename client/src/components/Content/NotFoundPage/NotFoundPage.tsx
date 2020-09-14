import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      error404Wrapper: {
        textAlign: "center",
        padding: "20px 30px",
        background: "#ffffff",
        marginTop: "10px"
      },
      statusHeader: {
        fontSize: "35px",
        margin: "0",
        marginBottom: "15px"
      },
      statusText: {
        fontSize: "25px",
        margin: "0",
      }
    })
);

export const NotFoundPage: React.FC = () => {
    const classes = useStyles()
    
    return (
      <div className={classes.error404Wrapper}>
        <p className={classes.statusHeader}>404</p>
        <p className={classes.statusText}>PAGE NOT FOUND</p>
      </div>
    )
}