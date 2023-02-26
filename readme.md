Steps -
1) Run npm init
2)  npm i -D webpack webpack-cli
3) To run webpack we need to create a script
// go to package.json and add a build key
// "build" : "webpack --mode production"

<img width="1502" alt="image" src="https://user-images.githubusercontent.com/56376002/221406120-a40586c9-cf6b-444b-90ec-f86e48a81944.png">

- Loaders -
to load images in css or sass and have webpack compile it

npm i -D sass style-loader css-loader sass-loader

## Html Plugin

npm i -D html-webpack-plugin
- To do caching -- creating a hash file instead of bundle.js 
- filename: '[name].[contenthash].js',

- Src maps for debugging

<img width="1502" alt="image" src="https://user-images.githubusercontent.com/56376002/221407688-c59e1e7b-1460-4179-8dc8-430896c2b87e.png">
-- for backward compatibilty. -
use bable loaders
## creating a webpack config
- in the root create `webpack.config`
- creating the entry and exit point
- you can make multiple entry points by making entry an object 

Html 

