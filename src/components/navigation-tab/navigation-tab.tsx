import React, { ReactElement, useState } from 'react';

import { NavigationTabProps } from './navigation-tab-props';
import { useStyles } from './styles';

import { Tab } from './tab/tab';

export function NavigationTab({ tabs }: NavigationTabProps): ReactElement<{}> {
    const classes = useStyles();

    const [showTabs, setShowtabs] = useState(
        tabs.map((tab, index) => {
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
                {tabs.map((tab: any, index: number) => {
                    return (
                        <div
                            key={`tab-${tab.title}-${index}`}
                            className={classes.tabItem}
                            onClick={() => onShowTab(index)}
                        >
                            {tab.title}
                        </div>
                    );
                })}
            </div>
            <div className={classes.tabPanelsWrapper}>
                {tabs.map((tab: any, index: number) => {
                    return (
                        <Tab
                            key={`tab-content-${index}`}
                            full={index > 0}
                            show={showTabs[index]}
                            onClose={() => onShowTab(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
