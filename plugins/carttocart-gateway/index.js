// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!
// import model from './model.js'
// import routes from './routes.js'
// import _ from 'lodash'

let json = {}
export {json};
export default (props) =>
{
    console.log('now cart-to-cart...')

    // _.forEach()
    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {
                if (item.routes)
                    item.routes.push({
                        "path": "/cart-to-cart",
                        "method": "post",
                        "access": "customer_all",
                        "controller": (req, res, next) => {
                            console.log('req.body', req.body);
                            return res.json({
                                url: ((req.body && req.body.callbackUrl) ? (req.body.callbackUrl) : '/transaction/cart-to-cart') + '?orderId=' + req.body.InvoiceNumber + '&Status=1'
                            })


                        }
                    })
            }
            if (item.name === 'transaction') {
                if (item.routes)
                    item.routes.push({
                        "path": "/status/cart-to-cart",
                        "method": "post",
                        "access": "customer_all",
                        "controller": (req, res, next) => {
                            let the_id = (req.body && req.body.orderId) ? req.body.orderId : null;
                            console.log('plugin cart-to-cart', req.body)

                            //here we have to decrease that
                            if (!the_id) {
                                return res.json({
                                    success: false,
                                    message: 'no id found,please put orderId in query'
                                })
                            }
                            let Order = req.mongoose.model('Order');
                            let Product = req.mongoose.model('Product');

                            Order.findOne({orderNumber: the_id}, '_id productsAfterThisOrder', function (err, order) {
                                if (err || !order || !order.productsAfterThisOrder) {
                                    return res.json({
                                        success: false,
                                        err: err,
                                        order: order,
                                        orderNumber: the_id,
                                        message: ''
                                    })
                                }
                                let productsAfterThisOrder = order.productsAfterThisOrder;
                                // tempProducts.forEach()
                                productsAfterThisOrder.forEach((tempProduct) => {
                                    console.log('\ntempProduct', {
                                        in_stock: tempProduct.in_stock,
                                        quantity: tempProduct.quantity,
                                        combinations: tempProduct.combinations,
                                    })

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
                                res.json({
                                    success: true,
                                    orderNumber: the_id
                                })
                            });


                        }
                    })
            }
        })
    // console.log('props');
    return props;
}