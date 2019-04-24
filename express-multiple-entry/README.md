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
