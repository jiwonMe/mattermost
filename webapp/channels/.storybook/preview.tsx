import React from 'react';
import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootProvider from '../src/components/root/root_provider';
import '../src/sass/styles.scss';
import '@mattermost/compass-icons/css/compass-icons.css';

// Minimal mock store for components that need Redux
const mockStore = createStore(
  (state = {}) => state,
  applyMiddleware(thunk),
);

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <RootProvider>
          <div style={{ padding: '1rem', background: 'var(--center-channel-bg, #fff)' }}>
            <Story />
          </div>
        </RootProvider>
      </Provider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e1e1e' },
      ],
    },
  },
};

export default preview;
