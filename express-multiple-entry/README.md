## webpack plugins
### mini-css-extract-plugin
> 此插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持CSS和SourceMaps的按需加载。
只能用于webpack-v4
相较于“extract-text-webpack-plugin”，1.支持异步加载，2.没有重复编译，3.易于使用，4.专注于css。

## dev-dependence
``` javascript
  "devDependencies": {
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "babel-loader": "^8.0.5",
    "clean-webpack-plugin": "^2.0.1",
    "cross-env": "^5.2.0",
    "css-loader": "^2.1.1",
    "del": "^2.2.2",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^3.0.1",
    "gulp": "^3.9.0",
    "gulp-autoprefixer": "^3.1.0",
    "gulp-filter": "^5.1.0",
    "gulp-if": "^2.0.2",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.0.1",
    "gulp-rev": "^9.0.0",
    "gulp-rev-replace": "^0.4.4",
    "gulp-sass": "^3.1.0",
    "gulp-uglify": "^1.5.1",
    "handlebars-loader": "^1.7.1",
    "html-webpack-plugin": "^3.2.0",
    "merge-stream": "^1.0.1",
    "mini-css-extract-plugin": "^0.6.0",
    "run-sequence": "^2.2.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.1",
    "webpack-dev-middleware": "^3.6.2",
    "webpack-merge": "^4.2.1"
  }
```

## dependence
``` javascript
  "dependencies": {
    "async": "^2.6.2",
    "cookie-parser": "^1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "handlebars": "^4.1.2",
    "hbs": "~4.0.1",
    "http-errors": "~1.6.2",
    "log4js": "^4.1.0",
    "morgan": "~1.9.0",
    "nodemon": "^1.18.11",
    "request": "^2.88.0",
    "request-promise": "^4.2.4",
    "serve-favicon": "^2.5.0"
  }
```

## babel
* 箭头函数转ES5，不需要那么多，只需要下面的
* "@babel/core": "^7.4.3",
* "@babel/plugin-transform-arrow-functions": "^7.2.0",
* "@babel/plugin-transform-function-name": "^7.4.3",
* "@babel/plugin-transform-parameters": "^7.4.3",
* "@babel/plugin-transform-property-mutators": "^7.2.0",
* "@babel/plugin-transform-runtime": "^7.4.3",
* "@babel/preset-env": "^7.4.3",
* "babel-loader": "^8.0.5",
* "babel-polyfill": "^6.26.0",
* "babel-preset-es2015": "^6.24.1",
> 但是只用到"@babel/preset-env"，参考[链接](https://blog.zfanw.com/babel-js/)
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: path.resolve("public/js"),
                /* use: [{
                    loader:'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    targets: {
                                        browsers: ["ie >= 8"]
                                    },
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-transform-parameters',//let => var
                            '@babel/plugin-transform-arrow-functions',//箭头函数
                            '@babel/plugin-transform-function-name',//箭头function-name
                            '@babel/plugin-transform-property-mutators',//es5
                        ]
                    }
                }] */
            }
