
import model from './model.js'
import routes from './routes.js'

export default {
    "name": "guaranteecards",
    "model": model,
    "modelName": "Guaranteecards",
    "routes": routes,
    "admin": {
        "list": {
            "header":[
                {"name":"guaranteecode","type":"string"},
                {"name": "updatedAt","type":"date"},
                {"name": "actions","type":"actions","edit":true,"delete":true,"pageBuilder":true},

            ]
        },
        "create": {
            "fields":[{"name":"guaranteecode","type":"string"},]
        },
        "edit": {
            "fields":[{"name":"guaranteecode","type":"string"},]

        },
    },
    "components":[ {
        "label": "one line - text field",
        "name": "textfield",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    },{
        "label": "multi line - text area",
        "name": "textarea",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    },{
        "label": "select - options",
        "name": "selectoptions",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    },{
        "label": "checkbox",
        "name": "checkbox",
        "addable": false,
        "settings": {
            "general": {},
            "design": [{"name": "padding", "type": "string"}],
        }
    },{
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