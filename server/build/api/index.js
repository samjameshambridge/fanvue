"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = exports.getComments = exports.getPosts = void 0;
const axios_1 = __importDefault(require("axios"));
const data_1 = require("./data");
const getPosts = () => {
    return data_1.posts;
};
exports.getPosts = getPosts;
const getComments = (id) => {
    return data_1.comments.filter((c) => c.id === id)[0];
};
exports.getComments = getComments;
const getImages = () => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield axios_1.default.get("https://jsonplaceholder.typicode.com/photos");
    return images.data.splice(0, 10);
});
exports.getImages = getImages;
