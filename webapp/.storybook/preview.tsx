import type {Preview} from '@storybook/react';
import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {configureStore} from '@reduxjs/toolkit';

// Minimal mock store — extend with real mattermost-redux reducers as needed
const mockStore = configureStore({
    reducer: {
        entities: (state = {}) => state,
        views: (state = {}) => state,
        preferences: (state = {}) => state,
    },
});

const defaultThemeStyle = `
  :root {
    --center-channel-bg: #ffffff;
    --center-channel-color: #3f4350;
    --sidebar-bg: #1b1d22;
    --sidebar-text: #ffffff;
    --button-bg: #0058cc;
    --button-color: #ffffff;
    --link-color: #1c58d9;
    --error-text: #d24b4e;
    --online-indicator: #2bac76;
  }
  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: var(--center-channel-bg);
    color: var(--center-channel-color);
  }
`;

const withMattermostProviders = (Story: any) => (
    <Provider store={mockStore}>
        <IntlProvider locale='en' messages={{}}>
            <style>{defaultThemeStyle}</style>
            <div style={{padding: '1rem'}}>
                <Story />
            </div>
        </IntlProvider>
    </Provider>
);

const preview: Preview = {
    decorators: [withMattermostProviders],
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
