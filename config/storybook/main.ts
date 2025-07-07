import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    webpackFinal: async (config) => {
        if (Array.isArray(config.entry)) {
            config.entry = config.entry.filter(Boolean);
        } else if (typeof config.entry === 'object') {
            Object.keys(config.entry).forEach((key) => {
                const value = config.entry![key];
                if (Array.isArray(value)) {
                    config.entry![key] = value.filter(Boolean);
                }
            });
        }

        return config;
    },

    docs: {
        autodocs: false,
    },
};

export default config;
