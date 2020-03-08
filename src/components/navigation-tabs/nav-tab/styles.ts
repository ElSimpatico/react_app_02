import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabItem: {
            marginLeft: '32px',
            color: '#eb4e56',
            cursor: 'pointer'
        }
    })
);
