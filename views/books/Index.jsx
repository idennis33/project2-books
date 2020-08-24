const React = require("react");
const Default = require("../components/Default.jsx");
class Index extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <Default>
        <div>
          <ul className="container d-flex p-4 flex-wrap"style={{gap:"5px"}}>
            {books.map((book, i) => {
              return (
                <div className="card" style={{width: '20rem', padding:'10',backgroundColor:'lightyellow',opacity:'.9', textAlign:'center'}}>
                  <h1>
                    <a href={`/books/${book._id}`}>{book.title}</a>
                  </h1>
                  <h2>By: {book.author}</h2>
                  <a href={`/books/${book._id}`}><img src={book.img}></img></a> <br></br>
                  <h4 className={book.finishedBook?'green':'red'}
                  >{book.finishedBook
                    ? `I finished the book`
                    : `I haven't finished it yet`}</h4>
                  <form
                    action={`/books/${book._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form action={`/books/${book._id}/edit`}><input type = 'submit' value= 'EDIT'/>
                  </form>
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
