import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_PALETTE } from '../../styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            position: 'relative',
            height: '100vh',
            backgroundColor: COLOR_PALETTE.SECONDARY
        },

        tabsWrapper: {
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            '@media (min-width: 764px)': {
                height: '72px'
            },
            '@media (min-width: 1436px)': {
                height: '96px'
            }
        },

        tabPanelsWrapper: {
            height: 'calc(100% - 56px)',
            '@media (min-width: 764px)': {
                height: 'calc(100% - 72px)'
            },
            '@media (min-width: 1436px)': {
                height: 'calc(100% - 96px)'
            }
        }
    })
);
