const React = require("react");

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/style.css" />
          <title>YARRRR</title>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}
module.exports = Default;
