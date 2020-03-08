import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            position: 'relative',
            height: '100vh'
        },

        tabsWrapper: {
            backgroundColor: '#1d1b3b',
            display: 'flex',
            alignItems: 'center',
            '@media (min-width: 320px)': {
                height: '56px'
            },
            '@media (min-width: 764px)': {
                height: '72px'
            },
            '@media (min-width: 1016px)': {
                height: '72px'
            },
            '@media (min-width: 1436px)': {
                height: '96px'
            }
        },

        tabPanelsWrapper: {
            color: 'white',
            backgroundColor: '#1d1b3b',
            height: '100%'
        }
    })
);
