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
        <div className="container d-flex p-4 flex-wrap card" style={{width: '25rem', backgroundColor:'lightyellow',opacity:'.9'}}>
          <form action={`/books/${_id}?_method=PUT`} method="POST">
            <h3>Title: <input type="text" name="title" defaultValue={title} /></h3>{" "}
            <br />
            <h3>Author: <input
              type="text"
              name="author"
              defaultValue={author}
            /></h3>{" "}
            <br />
            <h3>Description:{" "}
            <textarea
              id="description"
              name="description"
              defaultValue={description}
            /></h3>{" "}
            <br />
            <img src={img}></img><br/>
            <h4 style= {{color: 'black'}}>Finished Book:
            <input type="checkbox" name="finishedBook" checked={finishedBook} /></h4>
            <br />
            <input type="submit" name="" value="Submit Book Changes" />
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Edit;
