// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!
import PasargadApi from '@pepco/nodejs-rest-sdk';
import fs from "fs"
import moment from "moment"
// import model from './model.js'
// import routes from './routes.js'

let json = {}
export {json};
export default (props) => {
    console.log('run plugin')
    // _.forEach()
    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {
                if (item.routes)
                    item.routes.push({
                        "path": "/pasargad/getToken",
                        "method": "post",
                        "access": "customer_all",
//                         "controller2": function (req, res, next) {
//                             let Order = req.mongoose.model('Order');
//                             let Product = req.mongoose.model('Product');
//                             let Transaction = req.mongoose.model('Transaction');
//                             let Gateway = req.mongoose.model('Gateway');
//                             let Settings = req.mongoose.model('Settings');
//                             req.body.method = 'pasargad';
//                             console.log("buy...", req.params._id, req.params._price);
//
//                             if (req.body.method)
//                                 Gateway.findOne({slug: req.body.method}, function (err, gateway) {
//                                     if (!gateway || !gateway.request) {
//                                         return res.json({
//                                             success: false,
//                                             slug: req.body.method,
//                                             // gateway: gateway,
//                                             message: "gateway request not found"
//                                         })
//                                     }
//
//
//                                     Order.findById(req.body.InvoiceNumber, "sum , orderNumber , amount , discount , customer",
//                                         function (err, order) {
//                                             if (err || !order) {
//                                                 res.json({
//                                                     success: false,
//                                                     message: "error!"
//                                                 });
//                                                 return 0;
//                                             }
//
//                                             // obj[]=;
// // console.log(order.amount/);
// //                 return;
//                                             let amount = parseInt(order.amount);
// //                                             let amount = parseInt(order.amount) * 10;
// //                                             if (req.params._price) {
// //                                                 amount = parseInt(req.params._price) * 10;
// //                                             }
//                                             if (order.discount) {
//                                                 amount = amount - (order.discount);
//                                             }
//                                             if (amount < 0) {
//                                                 amount = 0;
//                                             }
//                                             if (amount > 5000000000) {
//                                                 return res.json({
//                                                     success: false,
//                                                     message: "price is more than 50,000,000T"
//                                                 });
//                                             }
//
//                                             if (!JSON.parse(gateway.request))
//                                                 return res.json({
//                                                     success: false,
//                                                     gateway: JSON.parse(gateway.request),
//                                                     message: "gateway request not found"
//                                                 })
//
//                                             fs.writeFile('./file.xml', req.body.sign, function (err) {
//                                                 if (err) return console.log(err);
//                                                 // Code here will execute if successfully written
//                                                 const pasargad = new PasargadApi(
//                                                     req.body.MerchantCode,
//                                                     req.body.TerminalCode,
//                                                     req.body.callbackUrl || process.env.BASE_URL,
//                                                     './file.xml');
// //e.q:
// // const pasargad = new PasargadApi(xxxxxx,xxxxx,"https://pep.co.ir/ipgtest","cert.xml");
//
// // Set Amount
//                                                 pasargad.amount = req.body.Amount;
//
// // Set Invoice Number (it MUST BE UNIQUE)
//                                                 pasargad.invoiceNumber = req.body.InvoiceNumber;
//
// // set Invoice Date with below format (Y/m/d H:i:s)
//                                                 let t = moment().format('YYYY/MM/DD hh:mm:ss');
//                                                 console.log('t', t);
//                                                 pasargad.invoiceDate = t;
//
// // get the Generated RedirectUrl from Pasargad API (async request):
// // output example: https://pep.shaparak.ir/payment.aspx?n=bPo+Z8GLB4oh5W0KVNohihxCu1qBB3kziabGvO1xqg8Y=
//                                                 pasargad.redirect().then(redirectURL => {
//
//                                                     let obj = {
//                                                         "amount": amount,
//                                                         "method": req.body.method,
//                                                         "order": req.body.InvoiceNumber,
//                                                         "gatewayResponse": JSON.stringify(parsedBody["data"]),
//                                                         "Authority": parsedBody["data"]["trackId"]
//                                                     };
//                                                     if (req.headers && req.headers.customer && req.headers.customer._id) {
//                                                         obj["customer"] = req.headers.customer._id;
//                                                     }
//                                                     // return res.json({
//                                                     //     ...obj, gateway: JSON.parse(gateway.request),
//                                                     // });
//                                                     Transaction.create(obj, function (err, transaction) {
//                                                         if (err || !transaction) {
//                                                             return res.json({
//                                                                 success: false,
//                                                                 message: "transaction could not be created",
//                                                                 err: err
//                                                             })
//                                                         }
//                                                         Order.findByIdAndUpdate(req.params._id, {
//                                                             $push: {
//                                                                 transaction: transaction._id
//                                                             }
//                                                         }, function (order_err, updated_order) {
//                                                             console.log('end of buy...');
//                                                             if (parsedBody['data'] && parsedBody['data']['url']) {
//                                                                 return res.json({
//                                                                     success: true,
//                                                                     url: parsedBody['data']['url']
//                                                                 });
//                                                             }
//                                                             if (parsedBody['data'] && parsedBody['data'].trackId) {
// // redirect user to `redirectURL`
//                                                                 console.log(redirectURL);
//                                                                 return res.json({
//                                                                     success: true,
//
//                                                                     url: redirectURL
//                                                                 })
//                                                             } else {
//                                                                 return res.json({
//                                                                     success: false,
//                                                                     // data: parsedBody['data'],
//                                                                     // request: JSON.parse(gateway.request),
//                                                                     // parsedBody: parsedBody['data']
//                                                                 });
//                                                             }
//                                                         });
//                                                     });
//
//
//
//                                                 });
//                                             });
//
//
//                                         }).populate("customer", "_id phoneNumber firstName lastName");
//                                 })
//                             else {
//                                 return res.json({
//                                     success: false,
//                                     message: "you have no gateway"
//                                 })
//                             }
//
//                         },

                        "controller": (req, res, next) => {
                            // console.log('hi', req.body)
                            // console.log('hi', req.params)
                            // return;
                            // var opath = 'test.txt';
                            // var ostring = 'Hello!'
                            // fs.writeFileSync(opath, ostring, 'utf8');
                            fs.writeFile('./file.xml', req.body.sign, function (err) {
                                if (err) return console.log(err);
                                // Code here will execute if successfully written
                                const pasargad = new PasargadApi(
                                    req.body.MerchantCode,
                                    req.body.TerminalCode,
                                    req.body.callbackUrl || process.env.BASE_URL,
                                    './file.xml');
//e.q:
// const pasargad = new PasargadApi(xxxxxx,xxxxx,"https://pep.co.ir/ipgtest","cert.xml");

// Set Amount
                                pasargad.amount = req.body.Amount;

// Set Invoice Number (it MUST BE UNIQUE)
                                pasargad.invoiceNumber = req.body.InvoiceNumber;

// set Invoice Date with below format (Y/m/d H:i:s)
                                let t = moment().format('YYYY/MM/DD hh:mm:ss');
                                console.log('t', t);
                                pasargad.invoiceDate = t;

// get the Generated RedirectUrl from Pasargad API (async request):
// output example: https://pep.shaparak.ir/payment.aspx?n=bPo+Z8GLB4oh5W0KVNohihxCu1qBB3kziabGvO1xqg8Y=
                                pasargad.redirect().then(redirectURL => {
                                    // redirect user to `redirectURL`
                                    console.log(redirectURL);
                                    // let url = new URL(redirectURL)
                                    // let trackId=url.searchParams.get("n")
                                    let trackId = req.body.InvoiceNumber + t
                                    console.log('trackId', trackId)
                                    return res.json({
                                        url: redirectURL,
                                        trackId: trackId
                                    })
                                    // return res.json({
                                    //     url: redirectURL
                                    // })
                                });
                            });

                        }
                    })
            }
            if (item.name === 'transaction') {
                if (item.routes)
                    item.routes.push({
                        "path": "/status/pasargad/",
                        "method": "post",
                        "access": "customer_all",
                        "controller": (req, res, next) => {
                            let data = {}, transactionObject = {}, orderObject = {};

                            let Gateway = req.mongoose.model('Gateway');
                            Gateway.findOne({slug: 'pasargad'}, function (err, items) {
                                if (err || !item) {
                                    return res.json({
                                        success: false
                                    })
                                }
                                if (!items.verify)
                                    return res.json({
                                        success: false
                                    })
                                console.log('verify', items.verify)

                                let verify = JSON.parse(items.verify);
                                console.log('verify', verify)

                                console.log('/status/pasargad/', req.body)
                                const pasargad = new PasargadApi(
                                    verify.data.MerchantCode,
                                    verify.data.TerminalCode,
                                    verify.data.callbackUrl || process.env.BASE_URL,
                                    './file.xml');
                                // Set Transaction refrence id received in
                                pasargad.transactionReferenceID = req.body.tref;

// Set Unique Invoice Number that you want to check the result
                                pasargad.invoiceNumber = req.body.iN;

// set Invoice Date of your Invoice
                                pasargad.invoiceDate = req.body.iD;

// check Transaction result
                                pasargad.checkTransaction().then(response => {
                                    // you can handle the response here:
                                    console.log('checkTransaction', response);
                                    if (response.IsSuccess) {
                                        // Set Amount
                                        pasargad.amount = response.Amount;

// Set Invoice Number (it MUST BE UNIQUE)
                                        pasargad.invoiceNumber = req.body.iN;

// set Invoice Date with below format (Y/m/d H:i:s)
                                        pasargad.invoiceDate = req.body.iD;

// verify payment:
                                        pasargad.verifyPayment().then(verifyResponse => {
                                            // response
                                            console.log('response', verifyResponse)
                                            //update order and transaction here
                                            transactionObject['statusCode'] = 1
                                            orderObject['paymentStatus'] = 'paid'
                                            transactionObject['status'] = true
                                            transactionObject['cardNumber'] = response.TrxMaskedCardNumber;
                                            transactionObject['RefID'] = verifyResponse.ShaparakRefNumber+' '+response.TraceNumber+' '+response.TransactionReferenceID;
                                            update_transaction();
                                            // return res.json({
                                            //     success: true,
                                            //     // response
                                            // })
                                        });

                                    } else if (!response.IsSuccess) {
                                        transactionObject['statusCode'] = -51
                                        orderObject['paymentStatus'] = 'notpaid'
                                        transactionObject['status'] = false
                                        update_transaction();
                                        // return res.json({
                                        //     success: false
                                        // })
                                    }
                                });
                            })

                            function update_transaction() {
                                console.log('let us update_transaction');
                                let Transaction = req.mongoose.model('Transaction');
                                let Order = req.mongoose.model('Order');
                                console.log('transactionObject', transactionObject);
                                Transaction.findOneAndUpdate({"Authority": req.body.iN + req.body.iD}, {
                                    $set: transactionObject

                                }, function (err, transaction) {
                                    if (err || !transaction) {
                                        return res.json({
                                            success: false,
                                            message: "transaction could not be found",
                                            err: err
                                        })
                                    }

                                    console.log('orderObject', orderObject, transaction.order)
                                    Order.findByIdAndUpdate(transaction.order, {
                                        $set: orderObject
                                    }, function (order_err, updated_order) {
                                        if (order_err || !updated_order) {
                                            return res.json({
                                                order_err: order_err,
                                                updated_order: updated_order,
                                                success: false
                                            })
                                        }
                                        if(updated_order.productsAfterThisOrder){
                                            let productsAfterThisOrder = updated_order.productsAfterThisOrder;
                                            // tempProducts.forEach()
                                            productsAfterThisOrder.forEach((tempProduct) => {
                                                // console.log('\ntempProduct', {
                                                //     in_stock: tempProduct.in_stock,
                                                //     quantity: tempProduct.quantity,
                                                //     combinations: tempProduct.combinations,
                                                // })

                                                Product.findByIdAndUpdate(tempProduct._id, {
                                                    $set: {
                                                        in_stock: tempProduct.in_stock,
                                                        quantity: tempProduct.quantity,
                                                        combinations: tempProduct.combinations,
                                                    }
                                                }, function (err, resp) {
                                                    console.log('resp', resp._id)
                                                })
                                            })

                                        }
                                        console.log('end of buy...');
                                        let respon = {
                                            success: transactionObject['status'],
                                            orderNumber: updated_order.orderNumber
                                        }

                                        return res.json(respon);
                                    })
                                });
                            }

                        }
                    })
            }
        })
    console.log('props');
    return props;
}