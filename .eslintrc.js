module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@pxblue/eslint-config' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true,
        jasmine: true
    }
};
