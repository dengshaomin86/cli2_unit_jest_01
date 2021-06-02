module.exports = {
  // 将ESLint限制为特定项目，ESLint将停止在父文件夹中查找
  root: true,
  // 指定环境
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 配置插件
  plugins: ['vue'],
  /**
   * 配置规则：
   * "off"或者0 - 关闭规则
   * "warn"或者1 - 将规则打开为警告（不影响退出代码）
   * "error"或者2 - 将规则打开为错误（触发时退出代码为1）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [1, 'single'],
    semi: [2, 'always'],
    'space-before-function-paren': 0,
    'spaced-comment': [0, 'never'],
    'no-unreachable': [0, 'never'],
    indent: 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'ignore',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'object-curly-spacing': ['error', 'always'] // 解构赋值和导入/导出说明符
  },
  // 指定全局变量：true允许覆盖变量、false禁止覆盖
  globals: {
    axios: true
  }
};
