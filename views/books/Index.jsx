const React = require('react');

class Index extends React.Component {
    render() {
        const { books } = this.props;
        return (
            <div>
                <h1>Books Index Page</h1>
                <nav>
                    <a href="/books/new">Add a New Book</a>
                </nav>
                <ul>
                    {
                        books.map((book, i) => {
                            return (
                                <li>
                                    <h1><a href={`/books/${book._id}`}>{book.title}</a></h1> 
                                    <h2>{book.author}</h2>
                                    <img src= {book.img}></img> <br></br>
                                    <h3>{book.description}</h3>
                                    {book.finishedBook ? `I finished the book` : `I haven't finished it yet`}
                                    {/* /fruits/id_of_the_fruit/override_post_method */}
                                    <form action={`/books/${book._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                    <a href={`/books/${book._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;