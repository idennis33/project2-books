const React = require('react');
const Default = require('../components/Default.jsx')
class Index extends React.Component {
    render() {
        const { books } = this.props;
        return (
            <Default>
            <div>
                <nav>
                    <h1>Books Collection</h1>
                    <a href="/books/new">Add a New Book to Collection</a><br/>
                    <a href={`/wishs`}>Go to Wish List</a><br/>
                    <a href="books/about">About</a>
                </nav>
                <ul className = "container d-flex p-4 flex-wrap">
                    {
                        books.map((book, i) => {
                            return (
                                <div className = 'card w-80'>
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
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;