import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_PALETTE } from '../../../styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabItem: {
            marginLeft: '32px',
            color: COLOR_PALETTE.RED,
            cursor: 'pointer'
        }
    })
);
