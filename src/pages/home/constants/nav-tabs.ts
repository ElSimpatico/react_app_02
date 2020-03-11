import { NavigationTab, Content } from '../../../components';
import i18next from '../../../../locales/i18nextConfig';

export const NAV_TABS: NavigationTab[] = [
    {
        title: i18next.t('common:seat'),
        component: Content
    },
    {
        title: i18next.t('common:faqs'),
        component: Content
    },

    {
        title: i18next.t('common:contacts'),
        component: Content
    }
];
