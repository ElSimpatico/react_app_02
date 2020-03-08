import React, { ReactElement } from 'react';
import { NavTabPanelProps } from './nav-tab-panel-props';
import { useStyles } from './styles';

export function NavTabPanel({
    full,
    show,
    onClose,
    children
}: NavTabPanelProps): ReactElement<{}> {
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
                <div className={classes.tabContent}>{children}</div>
            </div>
        </div>
    );
}
