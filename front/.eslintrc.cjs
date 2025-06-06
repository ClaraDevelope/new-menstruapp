module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};

// module.exports = {
//   root: true,
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/resolver': {
//       node: {
//         paths: ['src'],
//         extensions: ['.js', '.jsx'],
//       },
//     },
//   },
//   env: {
//     browser: true,
//     amd: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:prettier/recommended',
//   ],
//   plugins: ['simple-import-sort', 'prettier'],
//   rules: {
//     'prettier/prettier': ['error', {}, { usePrettierrc: true }],
//     'react/react-in-jsx-scope': 'off',
//     'jsx-a11y/accessible-emoji': 'off',
//     'react/prop-types': 'off',
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['hrefLeft', 'hrefRight'],
//         aspects: ['invalidHref', 'preferButton'],
//       },
//     ],
//   },
// };
