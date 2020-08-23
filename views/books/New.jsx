const React = require("react");
const Default = require("../components/Default.jsx");
class New extends React.Component {
  render() {
    return (
      <Default>
        <div>
          <header>
            <h1>Add Book to Collection</h1>
          </header>
          <form action="/books" method="POST">
            Title: <input type="text" name="title" defaultValue="Add Book Name" />
            <br />
            Author: <input type="text" name="author" defaultValue="Add Author Name" />
            <br />
            Description: <input type="text" name="description" />
            <br />
            Img: <input type="text" name="img" defaultValue="Add Book Image Here" />
            <br />
            Finsihed the book: <input type="checkbox" name="finishedBook" />
            <br />
            <input type="submit" name="" value="Add Book to Collection" />
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = New;
