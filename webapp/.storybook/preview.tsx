import type { Preview } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl';

// Simple mock store without any external toolkit
const mockStore = createStore((state = {
  entities: { preferences: { myPreferences: {} } },
  views: {},
}) => state);

const withMattermostProviders = (Story: any) => (
  <Provider store={mockStore}>
    <IntlProvider locale="en" messages={{}} defaultLocale="en">
      <div style={{ padding: '1rem', background: 'var(--center-channel-bg, #fff)' }}>
        <Story />
      </div>
    </IntlProvider>
  </Provider>
);

const preview: Preview = {
  decorators: [withMattermostProviders],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
