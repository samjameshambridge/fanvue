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
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
const path = require("path");
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(express_1.default.static(path.join(__dirname, "../../app/build")));
app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = api_1.getPosts();
    if (posts) {
        res.status(200);
        res.send(posts);
    }
    else {
        res.status(500);
    }
}));
app.get("/comments/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const comments = api_1.getComments(id);
    if (comments) {
        res.status(200);
        res.send(comments);
    }
    else {
        res.status(500);
    }
}));
app.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield api_1.getImages();
    if (images) {
        res.status(200);
        res.send(images);
    }
    else {
        res.status(500);
    }
}));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("../app/build/index.html"));
});
app.listen(port, () => {
    console.log("server started on port 5000");
});
