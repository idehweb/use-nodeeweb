// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!

let json = {}
export {json};
function publishToTelegram(message){
    console.log('publishToTelegram====>', message);
    if (!process.env.telegramLink) {
        console.log('process.env.telegramLink is empty')
        return
    }
    if (!process.env.telegramChatID) {
        console.log('process.env.telegramChatID is empty')
        return
    }
    return new Promise(function (resolve, reject) {
        let url = encodeURI(process.env.telegramLink);
        req.httpRequest({
            method: "post",
            url: url,
            data: {message, chatId: process.env.telegramChatID},
            json: true
        }).then(function (parsedBody) {
            resolve({
                success: true
                // body:parsedBody
            });
        }).catch(function (err) {
            reject({
                success: false
            });
        });


    });
}

export default (props) => {

    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {

                if (!item.hook) {
                    item.hook = [];
                }

                item.hook['update-transaction-by-customer'] = (props) => {
                    console.log('update-transaction-by-customer...',props)

                }
                item.hook.push({
                    event: 'create-order-by-customer',
                    name:'send order to telegram',
                    func: (params)=>{
                        console.log('send_to_telegram...')

                    }
                })
            }
        })
    // console.log('props');
    return props;
}