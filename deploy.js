const pages = require("gh-pages");

pages.publish(
  `${__dirname}/public`,
  {
    branch: "pages",
  },
  (err) => console.log(err ?? "Successfully published to github pages")
);
