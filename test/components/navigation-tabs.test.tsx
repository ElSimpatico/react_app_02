import React from 'react';
import { act } from 'react-dom/test-utils';

import { mount } from 'enzyme';
import {
    NavigationTabs,
    NavigationTabProps,
    Content,
} from '../../src/components';

describe('NavigationTabs', () => {
    let wrapper;
    const props: NavigationTabProps = {
        navTabs: [
            { title: 'title-1', component: Content },
            { title: 'title-2', component: Content },
        ],
    };

    beforeEach(() => {
        wrapper = mount(<NavigationTabs {...props} />);
    });

    it('render', () => {
        expect(wrapper.find('NavTab')).toHaveLength(props.navTabs.length);
        expect(wrapper.find('NavTabPanel')).toHaveLength(props.navTabs.length);
    });

    it('should be disabled click in first NavTab', () => {
        const index = 0;
        let navTabPanel;
        navTabPanel = wrapper.find('NavTabPanel').at(index);
        expect(
            navTabPanel
                .html()
                .match(/<div class=.*makeStyles-horizontalIn-\d+.*"/g)
        ).toBeTruthy();

        act(() => {
            wrapper.find('NavTab').at(index).prop('onTab')();
        });

        navTabPanel = wrapper.find('NavTabPanel').at(index);
        expect(
            navTabPanel
                .html()
                .match(/<div class=.*makeStyles-horizontalIn-\d+.*"/g)
        ).toBeTruthy();
    });

    it('should show NavTabPanel when click NavTab', () => {
        const index = 1;
        act(() => {
            wrapper.find('NavTab').at(index).prop('onTab')();
        });
        const navTabPanel = wrapper.find('NavTabPanel').at(index);
        expect(
            navTabPanel
                .html()
                .match(/<div class=.*makeStyles-horizontalIn-\d+.*"/g)
        ).toBeTruthy();
    });

    it('should hide NavTabPanel when click onClose button', () => {
        const index = 1;
        act(() => {
            wrapper.find('NavTab').at(index).prop('onTab')();
        });

        act(() => {
            wrapper.find('NavTabPanel').at(index).prop('onClose')();
        });

        const navTabPanel = wrapper.find('NavTabPanel').at(index);
        expect(
            navTabPanel
                .html()
                .match(/<div class=.*makeStyles-horizontalOut-\d+.*"/g)
        ).toBeTruthy();
    });
});
