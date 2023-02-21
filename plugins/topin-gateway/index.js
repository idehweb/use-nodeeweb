export default (props) => {
    function send_to_topin(req, params) {
        let Settings = req.mongoose.model('Settings');

        Settings.findOne({}, 'plugins', function (err, setting) {
            if (!setting.plugins) {
                return
            }
            if (!setting.plugins['topin-gateway'])
                return

            let {token, shopid} = setting.plugins['topin-gateway'];


            let cart = [];
            params.package.forEach((item) => {
                cart.push({
                    "count": item.quantity,
                    "discount": 0,
                    "price": item.price,
                    "title": item.product_name,
                    "weight": 500,
                    "product_id": null
                })
            })
            let obj = {

                "register_type": 0,
                "shop_id": shopid,
                "address": params.billingAddress.State + ' ' + params.billingAddress.State + ' ' + params.billingAddress.StreetAddress,
                "city_code": "1",
                "province_code": "1",
                "description": null,
                "email": null,
                "employee_code": "-1",
                "first_name": params.customer_data.firstName,
                "last_name": params.customer_data.lastName,
                "mobile": params.customer_data.phoneNumber,
                "phone": null,
                "postal_code": params.billingAddress.PostalCode,
                "pay_type": "1",
                "order_type": "0",
                "package_weight": 10,
                "presenter_code": 999,
                "manual_id": params.orderNumber,
                "products": cart
            };
            let the_req={
                'method':'post',
                'url':'https://api.tapin.ir/api/v2/public/order/post/register/'
            }

            req.httpRequest(obj).then(function (parsedBody) {
                if (!parsedBody["data"]) {
                    return res.json({
                        'success': false,
                        'message': ''
                    })
                }
                let data = (parsedBody["data"]);
            }).catch(e => {
            });

        });

    }

    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {
                if (!item.functions) {
                    item.functions = [];
                }
                if (!item.hook) {
                    item.hook = [];
                }

                item.functions.push({
                    "name": "send_to_topin",
                    "controller": (req, res, next) => {

                        console.log('send_to_topin', req.body);
                        send_to_topin(req, req.body)
                        return res.json({
                            success: true
                        })


                    }
                })
                item.hook.push({
                    event: 'create-order-by-customer',
                    name: 'send order to topin',
                    func: (req, res, next, params) => {
                        console.log('send_to_topin...', params)
                        send_to_topin(req, params)
                    }
                })

            }
        })
    // console.log('props');
    props['plugin']['topin-gateway'] = [
        {name: "token", value: '', label: "token"},
        {name: "shopid", value: '', label: "shop id"}
    ];
    return props;
}