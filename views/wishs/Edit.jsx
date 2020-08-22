const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, title, author,description, img, finishedBook} = this.props.wish;
        return (
            <div>
                <h1>Edit Page</h1>
                
                <form action={`/wishs/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title}/> <br/>
                    Author: <input type="text" name="author" defaultValue={author}/> <br/>
                    Description: <input type="text" name="description" defaultValue={description}/> <br/>
                    <img src= {img}></img>
                    Finished Book: 
                    <input type="checkbox" name="finishedBook" checked={finishedBook}/>
                    <br/>
                    <input type="submit" name="" value="Submit Book Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;