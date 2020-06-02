# vue-template

## Project setup

```JavaScript
npm install
```

### Compiles and hot-reloads for development

```JavaScript
npm run serve
```

### Compiles and minifies for production

```JavaScript
npm run build
```

### Lints and fixes files

```JavaScript
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用 normalize.css 初始化样式

在main.js中添加 import 'normalize.css'

### 使用 vant UI组件

1. 按需加载 ：在 babel.config.js 中 增加 按需加载插件

2. 1px边框问题：使用vant内置样式，动画：使用vant内置动画，文字省略：使用vant内置样式或者自己写

### 使用 autoprefixer postcss-pxtorem amfe-flexible 处理移动端单位统一，自动适配

在vue.config.js 中配置 css

### 增加svgo svg-sprite-loader 以及组件svgIcon和icons文件夹，使用svg图标（不失真）

在vue.config.js 中配置
