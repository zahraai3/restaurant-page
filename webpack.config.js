const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: './src/index.js', // الملف الرئيسي للجافاسكربت
  output: { 
    filename: 'main.js', // اسم الملف النهائي اللي رح يولده Webpack
    path: path.resolve(__dirname, 'dist'), // وين يحط الملفات النهائية
    clean: true, // ينظف مجلد dist قبل كل build جديد
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // يستخدم ملف HTML اللي كتبتيه
    }),
  ],
  mode: 'development', // الوضع: تطوير → يظهر تحذيرات، سريع، يشتغل live reload
  devServer: {
    static: './dist', // وين السيرفر يلقا ملفات HTML و JS
  },
  module: {   // ← هنا بدون فاصلة قبله
     rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
