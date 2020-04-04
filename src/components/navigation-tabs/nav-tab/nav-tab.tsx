import React, { ReactElement } from 'react';

import { NavTabProps } from './nav-tab-props';
import { useStyles } from './styles';

export function NavTab({
    title,
    onTab
}: NavTabProps): ReactElement<NavTabProps> {
    const classes = useStyles();

    return (
        <div className={classes.tabItem} onClick={onTab}>
            {title}
        </div>
    );
}
