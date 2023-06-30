module.exports = {
    syntax: "postcss-scss",
    plugins: [
        require("postcss-nested"),
        require("postcss-simple-vars"),
        require("autoprefixer"),
        require("cssnano")({
            preset: "default",
        }),
    ],
};
