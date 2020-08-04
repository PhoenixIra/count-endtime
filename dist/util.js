"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilEndtime = void 0;
const logger = require("winston");
var UtilEndtime;
(function (UtilEndtime) {
    //function to transform our format style to moment format style
    function transformToFormat(text) {
        /*
         * 0: Starstate
         * 1: quotemark
         * 2: time format
         * 3: text
         * 4: end
         */
        var state = 0;
        var output = [];
        var index = 0;
        for (let c of text) {
            switch (state) {
                //start
                case 0:
                    if (c != '"') {
                        logger.error("Could not transform text into momentjs format. \" was missing. Text was: '" + text + "'");
                    }
                    state = 1;
                    break;
                //quotemark
                case 1:
                    if (c == '[') {
                        state = 2;
                    }
                    else {
                        state = 3;
                        output[index++] = '[';
                        output[index++] = c;
                    }
                    break;
                case 2:
                    if (c == ']') {
                        state = 3;
                        output[index++] = '[';
                    }
                    else if (c == '"') {
                        state = 4;
                    }
                    else {
                        state = 2;
                        output[index++] = c;
                    }
                    break;
                case 3:
                    if (c == '[') {
                        state = 2;
                        output[index++] = ']';
                    }
                    else if (c == '"') {
                        state = 4;
                        output[index++] = ']';
                    }
                    else {
                        state = 3;
                        output[index++] = c;
                    }
                    break;
                case 4:
                default:
                    break;
            }
        }
        return output.join('');
    }
    UtilEndtime.transformToFormat = transformToFormat;
})(UtilEndtime = exports.UtilEndtime || (exports.UtilEndtime = {}));
