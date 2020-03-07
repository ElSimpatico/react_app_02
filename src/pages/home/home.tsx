import React, { ReactElement } from 'react';

import { Grid } from '@material-ui/core';
import { NavigationTab } from '../../components';

const TabsMock = [
    {
        title: 'seat'
    },
    {
        title: 'FAQs'
    }
];

export function Home(): ReactElement {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <NavigationTab tabs={TabsMock} />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
        </Grid>
    );
}
