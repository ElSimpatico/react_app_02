import React, { ReactElement } from 'react';

import { Grid } from '@material-ui/core';
import { NavigationTabs } from '../../components';
import { NAV_TABS } from './constants/nav-tabs';

export function Home(): ReactElement {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <NavigationTabs navTabs={NAV_TABS} />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
        </Grid>
    );
}
