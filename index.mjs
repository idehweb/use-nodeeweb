// const theApp = require('nodeeweb-backenkend');

import Server from '@nodeeweb/server'
import Shop from '@nodeeweb/shop'
// import Theme from './theme/settings.mjs'
// import Admin from './admin/index.mjs'
// import NodeewebShop from 'NodeewebShop'
// import entity from './entity.js'
// import shop from './shop.js'
console.log('run server in use-nodeeweb:')
Server({entity:[...Shop]});

//set config ==
//theme=akbar
// route= customer, admin ,
// model
//run server