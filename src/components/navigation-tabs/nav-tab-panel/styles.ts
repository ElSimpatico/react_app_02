import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabPanel: {
            height: '100%',
            width: '100%'
        },

        tabPanelFull: {
            backgroundColor: '#1d1b3b',
            position: 'absolute',
            top: '0',
            '@media (min-width: 320px)': {
                height: 'calc(100% + 56px)'
            },
            '@media (min-width: 764px)': {
                height: 'calc(100% + 72px)'
            },
            '@media (min-width: 1016px)': {
                height: 'calc(100% + 72px)'
            },
            '@media (min-width: 1436px)': {
                height: 'calc(100% + 96px)'
            }
        },

        horizontalIn: {
            transition: 'all 2s ease-in-out',
            transform: 'translateX(0)'
        },

        horizontalOut: {
            transition: 'all 2s ease-in-out',
            transform: 'translateX(-1000px)'
        },

        closeButton: {
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '0',
            cursor: 'pointer',
            color: '#eb4e56',
            zIndex: 1,
            '@media (min-width: 320px)': {
                margin: '16px 16px 0 0'
            },
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
            width: 'calc(100% - 6px)',
            height: '100%',
            '&::-webkit-scrollbar': {
                width: '4px',
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#363063'
            }
        },

        tabContentScroolFull: {
            width: 'calc(100% - 6px)',
            position: 'absolute',
            '@media (min-width: 320px)': {
                top: '0',
                height: 'calc(100% - 56px)'
            },
            '@media (min-width: 764px)': {
                top: '112px',
                height: 'calc(100% - 184px)'
            },
            '@media (min-width: 1016px)': {
                top: '77px',
                height: 'calc(100% - 149px)'
            },
            '@media (min-width: 1436px)': {
                top: '97px',
                height: 'calc(100% - 193px)'
            }
        },

        tabContent: {
            padding: '20px'
        }
    })
);
