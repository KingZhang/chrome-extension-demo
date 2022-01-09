# Chrome extension Demo with webpack
chrome扩展Demo，支持webpack构建



### 构建使用

```shell
npm run build
```

构建完成后，导入`dist`目录到chrome扩展即可



### chrome扩展配置

`manifest.json`

按最终dist生成的文件配置



### webpack配置

`webpack.config.js`

```json
// 配置输出的js文件
entry: {
    'content': './src/modules/content/content_script.js',
    'inner': './src/modules/content/inner_script.js',
    'background': './src/modules/background/background.js',
    'popup': './src/modules/popup/popup.js',
    'option': './src/modules/option/option.js',
},

......

// 配置html输出
new HtmlWebpackPlugin({
    chunks: [ 'option' ],
    filename: 'html/option.html',
    template: './src/modules/option/option.html',
}), 
new HtmlWebpackPlugin({
    chunks: [ 'popup' ],
    filename: 'html/popup.html',
    template: './src/modules/popup/popup.html',
}), 

......
// 配置文件复制
new CopyWebpackPlugin([
    'src/manifest.json',
    { from: 'src/asset/img/logo.png', to: 'images/logo.png' },
]),

```



