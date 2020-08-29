import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core";
import { IBM_Default_Color } from "../../../../../base/types/ColorBase";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tab__item: {
            display: 'flex',
            //backgroundColor: IBM_Default_Color.blue,
            alignItems: 'center',
            flexDirection: "column",
            flexShrink: 1,
            width: '44rem'
        },
        tab__item_title: {
            padding: theme.spacing(2),
            backgroundColor: IBM_Default_Color.black,
            color: IBM_Default_Color.white
        }
    })
);


interface Props {
    title: string, 
    Component: JSX.Element
}

export const ProfileTabFrame: React.FC<Props> = ({
    title,
    Component
}) => {
    const classes = useStyles()

    return (<div className={classes.tab__item}>
            <Typography variant='h5'
                        align='center'
                        className={classes.tab__item_title}>{title}</Typography>
            {Component}
    </div>)
}