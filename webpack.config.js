const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                exclude: /fonts/,
                use: [
                    {
                        loader: 'responsive-loader',
                        options: {
                            outputPath: 'img',
                            esModule: false,
                            adapter: require('responsive-loader/sharp'),
                            format: 'webp',
                            sizes: [576, 768, 992, 1080, 1200, 1400],
                            sizes: [1152, 1536, 1984, 2160, 2400, 2800],
                            placeholder: true,
                            placeholderSize: 20,
                            name: '[name]-[width].[ext]',
                            url: true
                        },
                    }
                ],
                type: 'javascript/auto',
            },
            {
                test: /\.html$/i,
                include: path.resolve(__dirname, 'src/components'),
                use: ['html-loader'],
            }

        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            title: "Star Wars : Le Réveil de la Force - Site officiel",
            filename: 'index.html',
            template: 'src/index.html',
            favicon: './src/img/favicon.ico',
            allowLegacyRendering: false,
            meta: {
                description: 'Découvrez l\'univers incroyable de Star Wars'
            }
        }),
        new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)/,
                options: {
                    quality: 75
                }
            }],
            overrideExtension: true,
            detailedLogs: true,
        }),

    ],
};





