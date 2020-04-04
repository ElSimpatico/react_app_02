import React, { ReactElement, useState } from 'react';

import { NavigationTabProps, NavigationTab } from './navigation-tabs-props';
import { useStyles } from './styles';

import { NavTab } from './nav-tab/nav-tab';
import { NavTabPanel } from './nav-tab-panel/nav-tab-panel';

export function NavigationTabs({
    navTabs,
}: NavigationTabProps): ReactElement<NavigationTabProps> {
    const classes = useStyles();

    const [showTabs, setShowtabs] = useState(
        navTabs.map((navTab: NavigationTab, index: number) => {
            return index === 0;
        })
    );

    function onShowTab(index: number) {
        if (index > 0) {
            showTabs[index] = !showTabs[index];
            setShowtabs([...showTabs]);
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.tabsWrapper}>
                {navTabs.map((navTab: NavigationTab, index: number) => {
                    return (
                        <NavTab
                            key={`nav-tab-${navTab.title}-${index}`}
                            title={navTab.title}
                            onTab={() => onShowTab(index)}
                        />
                    );
                })}
            </div>
            <div className={classes.tabPanelsWrapper}>
                {navTabs.map((navTab: NavigationTab, index: number) => {
                    return (
                        <NavTabPanel
                            key={`nav-tab-panel-${index}`}
                            full={index > 0}
                            show={showTabs[index]}
                            onClose={() => onShowTab(index)}
                        >
                            <navTab.component />
                        </NavTabPanel>
                    );
                })}
            </div>
        </div>
    );
}
