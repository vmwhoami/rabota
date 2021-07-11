"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
exports.default = delay;
