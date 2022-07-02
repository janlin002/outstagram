module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // 'import/no-unresolved': [2, { ignore: ['src'] }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: './webpack.config.js',
  //     },
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       paths: ['./src'],
  //     },
  //   },
  // },
};
