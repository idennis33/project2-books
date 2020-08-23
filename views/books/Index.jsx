const React = require("react");
const Default = require("../components/Default.jsx");
class Index extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <Default>
        <div>
          <ul className="container d-flex p-4 flex-wrap">
            {books.map((book, i) => {
              return (
                <div className="card" style={{width: '20rem'}}>
                  <h1>
                    <a href={`/books/${book._id}`}>{book.title}</a>
                  </h1>
                  <h2>{book.author}</h2>
                  <a href={`/books/${book._id}`}><img src={book.img}></img></a> <br></br>
                  <h4>{book.finishedBook
                    ? `I finished the book`
                    : `I haven't finished it yet`}</h4>
                  <form
                    action={`/books/${book._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="delete" />
                  </form>
                  <a href={`/books/${book._id}/edit`}>Edit</a>
                </div>
              );
            })}
          </ul>
        </div>
      </Default>
    );
  }
}

module.exports = Index;
