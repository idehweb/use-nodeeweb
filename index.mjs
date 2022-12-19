import Server from '@nodeeweb/server'
import Shop from '@nodeeweb/shop'
// import Form from '@nodeeweb/form'
// import Service from '@nodeeweb/service'
// import Front from '@nodeeweb/front'
// import pasar from './plugins/pasargad-gateway/index.js'
// import Chat , {createChatServer} from '@nodeeweb/chat'
//add shop ability
Server({
    // client:Front,
    entity: [
        ...Shop,
        // ...Form,
        // ...Service,
        // ...Chat
    ],
    // server: [createChatServer]
});
// Server({entity:[...Shop,
// front:{},
// admin:{
// routes:[]
// }});

