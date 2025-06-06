module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },

    webpackFinal: async (config) => {
        if (Array.isArray(config.entry)) {
            config.entry = config.entry.filter(Boolean);
        } else if (typeof config.entry === 'object') {
            Object.keys(config.entry).forEach((key) => {
                const value = config.entry[key];
                if (Array.isArray(value)) {
                    config.entry[key] = value.filter(Boolean);
                }
            });
        }

        return config;
    },
};
