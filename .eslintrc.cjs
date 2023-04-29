/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
    env: { browser: true, jest: true },
    extends: [
        'airbnb',
        // 'airbnb-typescript', // breaking ... why???
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react', 'react-refresh', '@typescript-eslint'],
    ignorePatterns: [
        'vite.config.js',
        '.eslintrc.js',
        'src/hooks/useIntercom.ts',
        'src/graphql/simulations/generated.tsx',
        'src/graphql/core/generated.tsx',
        '**.cy.ts',
        'cypress/global.d.ts',
        'cypress/support/commands.ts',
        'cypress/support/e2e.ts',
        './cypress.config.ts',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
        },
    },
    rules: {
        'react/require-default-props': 'off', // doesn't work with typescript
        'import/no-extraneous-dependencies': 'off', // doesn't seem like correct output...
        'react-refresh/only-export-components': 'warn',
        // 'react/jsx-uses-vars': 'error', // todo: say why
        // 'react/jsx-uses-react': 'error', // todo: say why
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: 'React',
            },
        ], // because we want to let React be imported even if it's not directly used
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: 'React',
            },
        ], // because we want to let React be imported even if it's not directly used
        'react/jsx-filename-extension': 'off', // not sure...
    },
};

// OLD NOT WORKING
// /**
//  * @type {import('@types/eslint').Linter.BaseConfig}
//  */
// module.exports = {
//   env: {
//     browser: true,
//     jest: true,
//   },
//   extends: [
//     'airbnb',
//     'airbnb-typescript',
//     'airbnb/hooks',
//     'plugin:react/jsx-runtime',
//     'prettier',
//   ],
//   globals: {
//     fetch: false,
//   },
//   // For some reason, running the ESLint command doesn't pick up all files
//   // while running it with the Vite plugin does. This fixes that
//   overrides: [
//     {
//       files: ['*.jsx', '*.tsx', '*.ts'],
//     },
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: { jsx: true },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: path.join(__dirname, "tsconfig.eslint.json")
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint',
//     'unicorn',
//     'cypress',
//     'no-only-tests',
//   ],
//   ignorePatterns: [
//     'vite.config.js',
//     '.eslintrc.js',
//     'src/hooks/useIntercom.ts',
//     'src/graphql/simulations/generated.tsx',
//     'src/graphql/core/generated.tsx',
//     '**.cy.ts',
//     'cypress/global.d.ts',
//     'cypress/support/commands.ts',
//     'cypress/support/e2e.ts',
//     './cypress.config.ts',
//   ],
//   settings: {
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx'],
//     },
//     'import/resolver': {
//       typescript: {
//         alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
//       },
//     },
//   },
//   rules: {
//     'cypress/no-assigning-return-values': 'error',
//     'cypress/no-unnecessary-waiting': 'error',
//     'cypress/assertion-before-screenshot': 'warn',
//     'cypress/no-force': 'warn',
//     'cypress/no-async-tests': 'error',
//     'cypress/no-pause': 'error',
//     'no-only-tests/no-only-tests': 'error',
//     curly: ['error', 'all'],
//     'arrow-body-style': 'off',
//     'brace-style': 'error',
//     'no-underscore-dangle': 'off',
//     'no-extra-boolean-cast': 'error',
//     'no-implicit-coercion': 'warn',
//     'no-use-before-define': 'off', // conflicts with the typescript version below
//     'no-console': ['error', { allow: ['warn', 'error'] }],
//     // from config-airbnb: disallow certain syntax forms, only remove the for..of rule
//     // https://github.com/airbnb/javascript/blob/5155aa5fc1ea9bb2c6493a06ddbd5c7a05414c86/packages/eslint-config-airbnb-base/rules/style.js
//     'no-restricted-syntax': [
//       'error',
//       {
//         selector: 'ForInStatement',
//         message:
//           'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
//       },
//       {
//         selector: 'LabeledStatement',
//         message:
//           'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
//       },
//       {
//         selector: 'WithStatement',
//         message:
//           '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
//       },
//     ],
//     'no-plusplus': [
//       'error',
//       {
//         allowForLoopAfterthoughts: true,
//       },
//     ],
//     'import/no-extraneous-dependencies': 'off',
//     'import/prefer-default-export': 'off',
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     'import/prefer-default-export': 'off',
//     '@typescript-eslint/brace-style': 'error',
//     '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
//     // // this errors on underscore functions, which should be removed
//     '@typescript-eslint/naming-convention': 'off',
//     '@typescript-eslint/no-for-in-array': 'error',
//     '@typescript-eslint/consistent-type-imports': 'warn',
//     '@typescript-eslint/no-unnecessary-type-constraint': 'error',
//     '@typescript-eslint/no-unnecessary-type-assertion': 'error',
//     '@typescript-eslint/require-await': 'warn',
//     radix: ['error', 'as-needed'],
//     'react/jsx-filename-extension': 'off',
//     'react/prop-types': 'off',
//     'react/jsx-no-bind': 'off',
//     'react/jsx-key': [1, { checkFragmentShorthand: true }],
//     'react/style-prop-object': 'error',
//     'react/void-dom-elements-no-children': 'error',
//     // "react/jsx-no-leaked-render": "warn", // might be nice but too much warnings for now
//     // "react/hook-use-state": "warn", // same as one above
//     'react/no-children-prop': 'warn',
//     'react/self-closing-comp': 'warn',
//     'react/jsx-pascal-case': 'warn',
//     'react/jsx-no-useless-fragment': 'warn',
//     'react/require-default-props': 'off', // doesn't work with typescript
//     'react/destructuring-assignment': 'warn',
//     'react/no-unstable-nested-components': 'error',
//     'react/function-component-definition': 'off',
//     'react/jsx-no-duplicate-props': 'error',
//     'react/no-array-index-key': 'warn', // when the list never changes, it's fine
//     'react/display-name': 'warn',
//     'react/jsx-props-no-spreading': 'warn', // maybe but gives too much errors for now
//     'react/jsx-one-expression-per-line': 'off',
//     'react/forbid-prop-types': 'off', // we won't be writing proptypes anymore anyway
//     'jsx-a11y/label-has-associated-control': 'off', // for now, throws a lot of errors
//     'unicorn/prefer-includes': 'warn',
//     'unicorn/new-for-builtins': 'warn',
//     'unicorn/no-new-array': 'warn',
//     'unicorn/throw-new-error': 'warn',
//     'unicorn/no-unnecessary-await': 'warn',
//     // 'unicorn/switch-case-braces': 'warn',
//     // the following were added in an update airbnb config and resulted in errors. We should look into it again
//     'no-unsafe-optional-chaining': 'off',
//     'no-restricted-imports': [
//       'warn',
//       {
//         name: 'graphql-request',
//         message: 'Do not use request directly. Use sendGQLQuery instead!',
//       },
//       {
//         name: 'shards-react',
//         message:
//           'Shards is deprecated! Please consider using a component from a different library.',
//       },
//       {
//         name: 'moment',
//         message:
//           'Moment is deprecated! Please consider using date-fns instead.',
//       },
//     ],
//   },
// };
