import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IBM_Default_Color } from "../../../base/types/ColorBase";
import { IBM_Style } from "../../../base/types/StyleBase";

const useStyles = makeStyles(
    createStyles({
      error__container: {
        textAlign: "center",
        padding: "20px 30px",
        background: IBM_Default_Color.white,
        borderRadius: IBM_Style.borderRadius,
        marginTop: "10px"
      },
      error__container_header: {
        fontSize: "35px",
        margin: "0",
        marginBottom: "15px"
      },
      error__container_message: {
        fontSize: "25px",
        margin: "0",
      }
    })
);

export const NotFoundPage: React.FC = () => {
    const classes = useStyles()
    
    return (
      <div className={classes.error__container}>
        <p className={classes.error__container_header}>404</p>
        <p className={classes.error__container_message}>PAGE NOT FOUND</p>
      </div>
    )
}