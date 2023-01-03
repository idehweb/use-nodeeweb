// import _ from 'lodash'
// Tip! Initialize this property in your payment service constructor method!
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
                        "path": "/carttocart",
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
    console.log('props');
    return props;
}