import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core";
import { IBM_Default_Color } from "../../../../../base/types/ColorBase";
import { IBM_Style } from "../../../../../base/types/StyleBase";

const useStyles = (widthFrame: string) => makeStyles((theme: Theme) =>
    createStyles({
        tab__item: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column",
            flexShrink: 1,
            marginBottom: theme.spacing(10),
            paddingBottom: theme.spacing(5),
            width: widthFrame,//'30rem',
            backgroundColor: IBM_Default_Color.white,
            borderRadius: IBM_Style.borderRadius
        },
        tab__item_title: {
            textTransform: 'uppercase',
            borderRadius: `0px 0px ${IBM_Style.borderRadius} ${IBM_Style.borderRadius}`,
            padding: '1rem 3rem',
            backgroundColor: IBM_Default_Color.black,
            color: IBM_Default_Color.white,
            fontWeight: 'bold'
        }
    })
)();


interface Props {
    title: string, 
    width: string,
    Component: JSX.Element
}

export const ProfileTabFrame: React.FC<Props> = ({
    title,
    width,
    Component
}) => {
    const classes = useStyles(width)

    return (<div className={classes.tab__item}>
            <Typography variant='h5'
                        align='center'
                        className={classes.tab__item_title}>{title}</Typography>
            {Component}
    </div>)
}