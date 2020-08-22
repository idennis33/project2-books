const React = require("react");
const Default = require("../components/Default.jsx");
class Edit extends React.Component {
  render() {
    const {
      _id,
      title,
      author,
      description,
      img,
      finishedBook,
    } = this.props.book;
    return (
      <Default>
        <div>
          <h1>Edit Page</h1>

          <form action={`/books/${_id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" defaultValue={title} />{" "}
            <br />
            Author: <input
              type="text"
              name="author"
              defaultValue={author}
            />{" "}
            <br />
            Description:{" "}
            <input
              type="text"
              name="description"
              defaultValue={description}
            />{" "}
            <br />
            <img src={img}></img>
            Finished Book:
            <input type="checkbox" name="finishedBook" checked={finishedBook} />
            <br />
            <input type="submit" name="" value="Submit Book Changes" />
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Edit;
