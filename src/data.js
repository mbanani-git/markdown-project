let data = [
  "# <span style='color:#32373d' >Welcome to MarkerMagic!</span>",
  "---",
  "##### This [tool](https://github.com/markedjs/marked/) enables you to convert markdown text into HTML.</br></br>",
  "######  How to use it ?",
  "- simply, type in a correct markdown syntax.",
  "- the result will be directly displayed!\n\n",

  "######  How to implent it in ReactJs ?",
  "- Install the package",
  "<div style='background-color:#343a40;padding:0.5rem;color:lightblue'>npm i marked</div></br>",
  "- import it and create a callback function",
  "<p style='background-color:#343a40;padding:0.5rem;color:lightblue'>const createMarkUp = (val) => {return { __html: marked(val) }}</p>\n\n",
  "##### These are some Markdown examples:",
  "- inline code:  `useState()`",
  "- Bold and Italic: This is a ***very*** important text.",
  "- Links: My personal website is [TheMbDev](https://thembdev.com).",
  "- images: This is **Azuki** </br> ![my picture](./azuki.jpg)",
];

data = data.join("\n");

export default data;
