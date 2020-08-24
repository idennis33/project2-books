const React = require("react");
const Default2 = require("./components/Default2");

class New extends React.Component {
  render() {
    return (
      <Default2>
        <div>
          <header>
            <h1>Add Book to Wish List</h1>
          </header>
          <form action="/wishs" method="POST">
            Title: <input type="text" name="title" placeholder="Add Book Name" />
            <br />
            Author: <input type="text" name="author" placeholder="Add Author Name" />
            <br />
            Description: <input type="text" name="description" placeholder="Add Description of book here" />
            <br />
            Img: <input type="text" name="img" placeholdere="Add Book Image Here" />
            <br />
            Finsihed the book: <input type="checkbox" name="finishedBook" />
            <br />
            <input type="submit" name="" value="Add Book to Wish List" />
          </form>
        </div>
      </Default2>
    );
  }
}

module.exports = New;
