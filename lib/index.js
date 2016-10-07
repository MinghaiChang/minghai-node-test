'use strict';

module.exports = 
{
    log: function (msg) {
        console.log(msg);
    },
    log: function (msg, indent) {
        var indentString = '';
        for (var i = 0; i < indent; i++) {
            indentString += '  ';
        }
        console.log(indentString + msg);
    }
};