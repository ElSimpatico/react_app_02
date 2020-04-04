export interface NavigationTab {
    title: string;
    component: any;
}

export interface NavigationTabProps {
    navTabs: NavigationTab[];
}
