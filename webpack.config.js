const path = require('path')

module.exports = {
    entry: './src/script.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}

export const typescriptConfig = {
    extends: ['plugin:@typescript-eslint/eslint-recommended'],
    overrides: [
        {
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:import/typescript',
            ],
            plugins: ['@typescript-eslint'],

            files: ['*.ts', '*.tsx'],

            rules: {},
        },
    ],
}
