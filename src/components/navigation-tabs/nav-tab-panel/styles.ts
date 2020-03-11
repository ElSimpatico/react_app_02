import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_PALETTE } from '../../../styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabPanel: {
            height: '100%'
        },

        tabPanelFull: {
            position: 'absolute',
            top: '0',
            width: '100%',
            backgroundColor: COLOR_PALETTE.SECONDARY
        },

        horizontalIn: {
            transition: 'all 2s ease-in-out',
            transform: 'translateX(0)'
        },

        horizontalOut: {
            transition: 'all 2s ease-in-out',
            transform: 'translateX(-3000px)'
        },

        closeButton: {
            position: 'absolute',
            right: '0',
            width: '24px',
            height: '24px',
            margin: '16px 16px 0 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: COLOR_PALETTE.RED,
            fontSize: '30px',
            '@media (min-width: 764px)': {
                margin: '31px 31px 0 0'
            },
            '@media (min-width: 1016px)': {
                margin: '25px 24px 0 0'
            },
            '@media (min-width: 1436px)': {
                margin: '32px 32px 0 0'
            }
        },

        tabContentScrool: {
            overflowY: 'auto',
            overflowX: 'hidden',
            width: 'calc(100% - 6px)',
            height: '100%',
            '&::-webkit-scrollbar': {
                width: '4px',
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: COLOR_PALETTE.PRIMARY
            }
        },

        tabContent: {
            // TODO padding
        }
    })
);
