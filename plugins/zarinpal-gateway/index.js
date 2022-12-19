// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!
import PasargadApi from '@pepco/nodejs-rest-sdk';
import fs from "fs"
import model from './model.js'
import routes from './routes.js'

let json = {
    "dependencies": "guaranteecards",
    "name": "guaranteecards",
    "model": model,
    "modelName": "Guaranteecards",
    "routes": routes,
    "admin": {
        "list": {
            "header": [
                {"name": "guaranteecode", "type": "string"},
                {"name": "updatedAt", "type": "date"},
                {"name": "actions", "type": "actions", "edit": true, "delete": true, "pageBuilder": true},

            ]
        },
        "create": {
            "fields": [{"name": "guaranteecode", "type": "string"},]
        },
        "edit": {
            "fields": [{"name": "guaranteecode", "type": "string"},]

        },
    },
    "components": [{
        "label": "one line - text field",
        "name": "textfield",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    }, {
        "label": "multi line - text area",
        "name": "textarea",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    }, {
        "label": "select - options",
        "name": "selectoptions",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    }, {
        "label": "checkbox",
        "name": "checkbox",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    }, {
        "label": "radio buttons",
        "name": "radio",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    }],
    "edits": [{
        "func": (req, res, next) => {
        }
    }],

}
export {json};
export default (props) => {
    // _.forEach()
    if (props && props.entity)
        props.entity.map((item, i) => {
            if (item.name === 'gateway') {
                if (item.routes)
                    item.routes.push({
                        "path": "/zarinpal/getToken",
                        "method": "post",
                        "access": "customer_all",
                        "controller": (req, res, next) => {
                            console.log('hi', req.body.TerminalCode)
                            // var opath = 'test.txt';
                            // var ostring = 'Hello!'
                            // fs.writeFileSync(opath, ostring, 'utf8');
                            fs.writeFile('./file.xml', req.body.sign, function (err) {
                                if (err) return console.log(err);
                                // Code here will execute if successfully written
                                const pasargad = new PasargadApi(
                                    req.body.MerchantCode,
                                    req.body.TerminalCode,
                                    process.env.BASE_URL,
                                    './file.xml');
//e.q:
// const pasargad = new PasargadApi(xxxxxx,xxxxx,"https://pep.co.ir/ipgtest","cert.xml");

// Set Amount
                                pasargad.amount = req.body.Amount;

// Set Invoice Number (it MUST BE UNIQUE)
                                pasargad.invoiceNumber = req.body.InvoiceNumber;

// set Invoice Date with below format (Y/m/d H:i:s)
                                pasargad.invoiceDate = "2021/08/08 11:54:03";

// get the Generated RedirectUrl from Pasargad API (async request):
// output example: https://pep.shaparak.ir/payment.aspx?n=bPo+Z8GLB4oh5W0KVNohihxCu1qBB3kziabGvO1xqg8Y=
                                pasargad.redirect().then(redirectURL => {
                                    // redirect user to `redirectURL`
                                    console.log(redirectURL);
                                    return res.json({
                                        url: redirectURL
                                    })
                                });
                            });

                        }
                    })
            }
        })
    console.log('props');
    return props;
}