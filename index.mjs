import Server from '@nodeeweb/server'
import Shop from '@nodeeweb/shop'
import Form from '@nodeeweb/form'
import Service from '@nodeeweb/service'
import Guaranteecards from './plugins/guarantee-cards/index.js'
// import Chat , {createChatServer} from '@nodeeweb/chat'
//add shop ability
Server({
    entity: [
        ...Shop,
        ...Form,
        ...Service,
        Guaranteecards,
        // ...Chat
    ],
    // server: [createChatServer]
});
// Server({entity:[...Shop,
// front:{},
// admin:{
// routes:[]
// }});

