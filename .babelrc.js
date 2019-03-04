module.exports = {
    presets: [
        '@babel/preset-flow',
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                targets: {
                    node: '8',
                },
            },
        ],
        'babel-preset-joblift',
    ],
};
