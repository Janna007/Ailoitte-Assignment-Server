import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Enforce consistent indentation (4 spaces in this case)
            // "indent": ["error", 4],
            // // Enforce the use of single quotes for strings
            // "quotes": ["error", "single"],
            // // Enforce semicolons at the end of statements
            // "semi": ["error", "always"],
            // Enforce consistent line breaks (LF for Unix)
            // "linebreak-style": ["error", "unix"],
            // Require the use of === and !== (no implicit type conversions)
            // "eqeqeq": ["error", "always"],
            // // Enforce a maximum line length (usually 80 or 100 characters)
            // "max-len": ["error", { code: 100 }],
            // Enable Prettier as a lint rule
            // 'no-console':'off'
        },
    },
    {
        ignores: [
            'dist',
            'node_modules',
            'eslint.config.mjs',
            'jest.config.js',
            'tsconfig.json',
            'scripts',
            '**/*.spec.ts',
            'tests',
            'coverage',
        ],
    }
);
