export default (props) => {
    // console.lo
    // _.forEach()
    // if (props && props.entity)
        // props.entity.map((item, i) => {
        //     if (item.name === 'transaction') {
        //         if (item.routes)
        //             item.routes.push({
        //                 "path": "/status/zibal/",
        //                 "method": "post",
        //                 "access": "customer_all",
        //                 "controller": (req, res, next) => {
        //                     let data = {}, transactionObject = {}, orderObject = {};
        //                     if (req.body.success == 0 || req.body.success == "0") {
        //                         if (req.body.status && req.body.status == 3)
        //                             transactionObject['statusCode'] = 3
        //                     }
        //                     if (req.body.success == 1 || req.body.success == "1") {
        //                         let Gateway = req.mongoose.model('Gateway');
        //                         Gateway.findOne({slug: 'zibal'}, function (err, items) {
        //                             if (err || !item) {
        //                                 return res.json({
        //                                     success: false
        //                                 })
        //                             }
        //                             if (!items.verify)
        //                                 return res.json({
        //                                     success: false
        //                                 })
        //                             console.log('verify', items.verify)
        //
        //                             let verify = JSON.parse(items.verify);
        //                             console.log('verify', verify)
        //
        //                             console.log('/status/zibal/', req.body)
        //                             verify['data']['trackId'] = parseInt(req.body.trackId);
        //                             console.log('verify', verify)
        //                             req.httpRequest(verify).then(function (parsedBody) {
        //                                 console.log("parsedBody[\"data\"]", parsedBody["data"])
        //                                 if (!parsedBody["data"]) {
        //                                     return res.json({
        //                                         'success': false,
        //                                         'message': ''
        //                                     })
        //                                 }
        //                                 data = (parsedBody["data"]);
        //                                 console.log('data', data)
        //                                 transactionObject['status'] = !!(data && data.result === 100);
        //                                 transactionObject['statusCode'] = (data && data.result === 100) ? '1' : '-1';
        //                                 if (data.cardNumber)
        //                                     transactionObject['cardNumber'] = data.cardNumber;
        //
        //                                 if (data.refNumber)
        //                                     transactionObject['RefID'] = data.refNumber;
        //                                 orderObject['paymentStatus'] = (data && data.result === 100) ? 'paid' : 'notpaid'
        //                                 if (data && (data.result == 201)) {
        //                                     return res.json({
        //                                         message: 'you did it before',
        //                                         success: false
        //                                     })
        //                                 } else if (data && (data.result == 202)) {
        //                                     return res.json({
        //                                         message: 'you did noy pay',
        //                                         success: false
        //                                     })
        //                                 } else if (data && (data.result == 102)) {
        //                                     return res.json({
        //                                         message: 'you did not enter merchant',
        //                                         success: false
        //                                     })
        //                                 } else if (data && (data.result == 103)) {
        //                                     return res.json({
        //                                         message: 'merchant is deactive',
        //                                         success: false
        //                                     })
        //                                 } else if (data && (data.result == 104)) {
        //                                     return res.json({
        //                                         message: 'merchant is unknown',
        //                                         success: false
        //                                     })
        //                                 } else if (data && (data.result == 203)) {
        //                                     return res.json({
        //                                         message: 'trackId is unknown',
        //                                         success: false
        //                                     })
        //                                 } else {
        //                                     update_transaction();
        //                                 }
        //
        //                             }).catch(e => res.json({e, requ: verify}))
        //
        //
        //                             // return;
        //
        //                         })
        //                     } else {
        //                         update_transaction();
        //                     }
        //
        //                     function update_transaction() {
        //                         req.updateTransaction(req, res, next, transactionObject)
        //                     }
        //                 }
        //             })
        //     }
        //
        // })
    props['plugin']['db-sync-gateway'] = [
        {name: "maindb", value: '',label:"main db"},
        {name: "username", value: '',label:"username"},
        {name: "password", value: '',label:"password"},
    ];
    return props;
}