"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComments = exports.getPosts = void 0;
const posts = [
    {
        id: 1,
        title: "Post 1",
        comments: ["Really excited", "love to see it", "lets get bread"],
    },
    {
        id: 2,
        title: "Post 2",
        comments: ["Really excited", "love to see it", "lets get bread"],
    },
    {
        id: 3,
        title: "Post 3",
        comments: ["Really excited", "love to see it", "lets get bread"],
    },
    {
        id: 4,
        title: "Post 4",
        comments: ["Really excited", "love to see it", "lets get bread"],
    },
    {
        id: 5,
        title: "Post 5",
        comments: ["Really excited", "love to see it", "lets get bread"],
    },
];
const getPosts = () => {
    return posts;
};
exports.getPosts = getPosts;
const getComments = (id) => {
    const post = posts.filter((p) => p.id === id)[0];
    return post.comments;
};
exports.getComments = getComments;
