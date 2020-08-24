const React = require("react");
const Default = require("../components/Default.jsx");
class About extends React.Component {
  render() {
    return (
      <Default>
        <div>
          <p style={{backgroundColor:'whitesmoke'}}>
            You wanted a place online where you can have a library of the books
            you owned and show if you read through them or not. Well here you go
            with your own personal online book collection. You can also add
            books to a wish list.
          </p>
        </div>
      </Default>
    );
  }
}

module.exports = About;
