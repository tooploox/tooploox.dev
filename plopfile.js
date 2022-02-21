module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("basics", {
    prompts: [], // array of inquirer prompts
    actions: [], // array of actions
  });
};

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Article title: ",
      },
      {
        type: "input",
        name: "author",
        message: "Article author: ",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/post/{{kebabCase title}}.mdx",
        templateFile: ".plop/article.mdx.hbs",
      },
      {
        type: "add",
        path: "public/images/{{kebabCase title}}/main.png",
        templateFile: ".plop/tooploox.png",
      },
    ],
  });
};
