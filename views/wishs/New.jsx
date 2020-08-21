const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <header>
              <h1>Add Book to Collection</h1>
              </header>
              <form action="/wishs" method="POST">
                  Title: <input type="text" name="title" /><br/>
                  Author: <input type="text" name="author" /><br/>
                  Description: <input type="text" name="description" /><br/>
                  Img: <input type="text" name = "img"/><br/>
                  Finsihed the book: <input type="checkbox" name="finishedBook" /><br/>
                  <input type="submit" name="" value="Add Book to Wish List"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;