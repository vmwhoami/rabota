"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay = (time) => {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
};
exports.default = delay;
