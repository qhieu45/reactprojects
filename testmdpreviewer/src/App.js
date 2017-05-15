import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Header extends React.Component {
  render() {
    return (
    <div className="col-md-12">
    <h1 className="text-center">Welcome to Hieu Cao's MD Previewer</h1>
      <h2 className="text-center">Powered By Reactjs </h2>
      </div>
      );
  }
}

class MDText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // this method handle when a key is pressed/ change to textarea
  // when a key is pressed, update the state of the textarea
  // also update the state of the preview area
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  previewMD(mdvalue){
    const newmdvalue = marked(mdvalue, {sanitize: true});
    return {__html: newmdvalue};
  }

    render() {
      return (
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <textarea defaultValue={this.state.value}
              onChange = {this.handleChange}
              ></textarea>
            </div>
            <div className="col-md-5 col-md-offset-1 previewarea" dangerouslySetInnerHTML={this.previewMD(this.state.value)}>
            </div>
          </div>
        );
    }
}


class Main extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <MDText />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);