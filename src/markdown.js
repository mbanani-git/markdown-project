import React from "react";
import marked from "marked";

const data =
  "# Marker Editor  \n---\nThis [Marked](https://github.com/markedjs/marked/) tool enables you to convert markdown text into HTML.\n## How to use it ?\n" +
  "1. Type some markdown text in the editor.\n2. see the live updates in the display zone\n\n" +
  "### To implement it using React:\n ```\n class MarkdownExample extends React.Component {\ngetMarkdownText() {var rawMarkup = marked('This is _Markdown_.', {sanitize: true});return { __html: rawMarkup };}\nrender() {return <div dangerouslySetInnerHTML={this.getMarkdownText()} />}}\n```\n" +
  "### These are some markdown examples:\n >this is an **inline code:**  `useState()`\n" +
  "- And this is a list.\n - And this is a picture.\n\n" +
  "![my picture](./azuki.jpg)\n";

const createMarkUp = (val) => {
  return { __html: marked(val) };
};

class MarkDownInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="accordion mt-4" id="accordionOne">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="bi bi-braces mx-2"></i>
                Display
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionOne"
            >
              <div
                id="preview"
                dangerouslySetInnerHTML={createMarkUp(this.props.input)}
                onChange={this.props.handleChange}
              ></div>
            </div>
          </div>
          <div className="row signature text-center my-2">
            <p>By mbanani @mbdev</p>
            <p>Made with ReactJs, MarkedJs and Bootstrap.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default class MarkDownOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearData = this.clearData.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  clearData() {
    this.setState({
      input: "",
    });
  }

  render() {
    console.log(this.state.input);
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="accordion justify-content-center d-flex flex-column"
            id="accordionTwo"
          >
            <div className="accordion-item2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="bi bi-pencil-square mx-2"></i>
                  Editor
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionTwo"
              >
                <div className="">
                  <textarea
                    className="form-control"
                    id="editor"
                    rows="8"
                    onChange={this.handleChange}
                    value={this.state.input}
                  >
                    {this.state.input}
                  </textarea>
                </div>
              </div>
            </div>
            <button
              className="btn-danger rounded-pill my-2 w-50 mx-auto"
              onClick={this.clearData}
            >
              Clear All
            </button>
          </div>

          <MarkDownInput
            input={this.state.input}
            handleChange={this.handleChange}
          />
        </div>
      </React.Fragment>
    );
  }
}
