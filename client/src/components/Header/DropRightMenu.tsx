import React from 'react'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import { IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import { Inbox, Menu } from '@material-ui/icons'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { NavLink } from 'react-router-dom'
import { NavigationItemInfo } from '../../common/components/type'
import { IBM_Default_Color } from '../../base/types/ColorBase'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#494949",
            color: "white"
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        drawerListItem: {
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: '#555',
            }
        }
    })
);

type Props = {
    pages: Array<NavigationItemInfo>,
    isOpen: boolean,
    toggleDropRightMenu: (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
    logOut: () => any
}

/**
 * Выпадающее справа меню.
 * @param pages Список страниц.
 * @param isOpen Задает значение, показывающее, открыто ли выподающее меню.
 */
export const DropRightMenu: React.FC<Props> = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={props.isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={props.toggleDropRightMenu(false)}>
            <div>
                <div className={classes.drawerHeader}>
                    <IconButton style={{ color: IBM_Default_Color.white }} onClick={props.toggleDropRightMenu(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    {props.pages.map(x => (
                        <ListItem className={classes.drawerListItem}
                            component={NavLink}
                            key={x.text}
                            onClick={props.toggleDropRightMenu(false)}
                            to={x.pathURL}>
                            <ListItemIcon>
                                <Menu />
                            </ListItemIcon>
                            <ListItemText primary={x.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem className={classes.drawerListItem}
                        component={Button}
                        onClick={props.logOut}>
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary={"Выйти"} />
                    </ListItem>
                </List>
            </div>

        </Drawer>

    );
};