import React from "react";
import marked from "marked";
import result from "./data";
import logo from "./logo.png";
const createMarkUp = (val) => {
  return { __html: marked(val) };
};

class MarkDownOutput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="accordion mt-5 w-100 " id="accordionOne">
          <div className="accordion-item w-100 ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="bi bi-braces mx-2"></i>
                Display
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionOne"
            >
              <div
                className="p-3"
                id="preview"
                dangerouslySetInnerHTML={createMarkUp(this.props.input)}
                onChange={this.props.handleChange}
              ></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class MarkDownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: result,
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
    return (
      <React.Fragment>
        <div className="">
          <div className="accordion justify-content-center d-flex flex-column" id="accordionTwo">
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
            <button className="btn-danger rounded-pill my-2 w-50 mx-auto mt-4" onClick={this.clearData}>
              Clear All
            </button>
          </div>

          <MarkDownOutput input={this.state.input} handleChange={this.handleChange} />
        </div>
      </React.Fragment>
    );
  }
}

const Main = () => {
  return (
    <div className="main container mw-100">
      <header>
        <img src={logo} alt="" />
      </header>
      <div className="container justify-content-center">
        <MarkDownInput />
        <section className="copyright mt-5">
          Created by{" "}
          <a href="https://thembdev.com">
            <img src={"https://mbdev-utils.s3.eu-west-3.amazonaws.com/mbdev_logo_sm.svg"} alt="mbdev" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Main;
