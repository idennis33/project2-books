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
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lobster&family=Montserrat&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="/css/style.css" />
          <title>Book Collection</title>
        </head>
        <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href={`/books`}>Books Collection</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href={`/books/new`}>Add New Book to Collection</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="books/about">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href={`/wishs`}>Wish List</a>
                    </li>
                </ul>
            </div>
        </nav>    
            {this.props.children}
        </body>
</html>
    );
  }
}
module.exports = Default;
