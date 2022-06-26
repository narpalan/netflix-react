module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
  extends: [
      'airbnb',
      'airbnb-typescript'
    ],
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules:{ 
        'import/prefer-default-export': 'off',              
        'no-param-reassign':[
          'error',{
            props:true,
            ignorePropertyModificationsFor:['state']
          }
        ],
        'linebreak-style':0,
        '@typescript-eslint/no-unused-vars':[
          "error",
          {
            argsIgnorePattern:'^_'
          }
        ]        
    }
  };
