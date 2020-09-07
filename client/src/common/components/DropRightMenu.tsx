import React from 'react'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import { IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { NavLink } from 'react-router-dom'
import { NavigationItemInfo } from './type'
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
    toggleDropRightMenu: (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

/**
 * Выпадающее справа меню.
 * @param pages Список страниц.
 * @param isOpen Задает значение, показывающее, открыто ли выподающее меню.
 */
export const DropRightMenu: React.FC<Props> = ({
    pages,
    isOpen,
    toggleDropRightMenu
}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={toggleDropRightMenu(false)}>
            <div>
                <div className={classes.drawerHeader}>
                    <IconButton style={{color: IBM_Default_Color.white}} onClick={toggleDropRightMenu(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    {pages.map(x => (
                        <ListItem className={classes.drawerListItem}
                                  component={NavLink}
                                  key={x.text}
                                  onClick={toggleDropRightMenu(false)}
                                  to={x.pathURL}>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={x.text} />
                        </ListItem>
                    ))}
                </List>
            </div>

        </Drawer>

    );
};