const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");

let tasks = [
  {
    id: nanoid(),
    title: "Work",
    text: "Do it!",
    done: false,
  },
];
