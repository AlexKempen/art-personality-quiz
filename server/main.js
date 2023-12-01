const ViteExpress = require("vite-express");
const express = require("express");

const app = express();

ViteExpress.listen(app, 3000, () => {
    console.log("Server is listening on port 3000.");
});
