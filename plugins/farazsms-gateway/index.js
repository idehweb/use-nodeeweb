// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!

let json = {}
export {json};
export default (props) => {
    // _.forEach()
    // let t = {
    //     "method": "POST",
    //     "url": "http://ippanel.com/api/select",
    //     "body": {
    //         "op": "send",
    //         "uname": "09121234393",
    //         "pass": "golafshan4040",
    //         "from": "98500010401234393",
    //         "to": ["09120539945"],
    //         "message": "سلام",
    //     },
    //     "json": true
    // }
    console.log('run farazsms gateway')

    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {
                if (item.routes)
                    item.routes.push({
                        "path": "/farazsms/sendsms",
                        "method": "post",
                        "access": "customer_all",
                        "controller": (req, res, next) => {
                            return res.json({
                                url: '/transaction'
                            })


                        }
                    })
            }
        })
    // console.log('props');
    return props;
}