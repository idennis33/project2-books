const React = require('react');

class Index extends React.Component {
    render() {
        const { wishs } = this.props;
        return (
            <div>
                <nav>
                    <h1>Wish Books Index Page</h1>
                    <a href="/wishs/new">Add a New Book</a><br/>
                    <a href={`/books`}>Go to Back to Books List</a>
                </nav>
                <ul>
                    {
                        wishs.map((wish, i) => {
                            return (
                                <li>
                                    <h1><a href={`/wish/${wish._id}`}>{wish.title}</a></h1> 
                                    <h2>{wish.author}</h2>
                                    <img src= {wish.img}></img> <br></br>
                                    <h3>{wish.description}</h3>
                                    {wish.finishedBook ? `I finished the book` : `I haven't finished it yet`}
                                    {/* /fruits/id_of_the_fruit/override_post_method */}
                                    <form action={`/wishs/${wish._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                    <a href={`/wishs/${wish._id}/edit`}>Edit</a>
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