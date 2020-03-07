import React, { ReactElement } from 'react';
import { TabProps } from './tab-props';
import { useStyles } from './styles';

export function Tab({ full, show, onClose }: TabProps): ReactElement<{}> {
    const classes = useStyles();

    return (
        <div
            className={`${classes.tabPanel} ${
                full ? classes.tabPanelFull : ''
            } ${show ? classes.horizontalIn : classes.horizontalOut}`}
        >
            {full && (
                <div className={classes.closeButton} onClick={onClose}>
                    X
                </div>
            )}
            <div
                className={`${classes.tabContentScrool} ${
                    full ? classes.tabContentScroolFull : ''
                }`}
            >
                <div className={classes.tabContent}>
                    <div>{'contenido'}</div>
                </div>
            </div>
        </div>
    );
}
