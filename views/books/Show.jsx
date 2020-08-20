const React = require('react');

class Show extends React.Component {
    render() {
        const { title, author,description,img, finishedBook } = this.props.book;
        return (
            <div>
                <h1><p>{title}</p></h1>
                <p>The {author} </p>
                <p>{description}</p>
                <img src= {img}></img>
                <p>{finishedBook ? `Finished Book` : `Have not finished book`}</p>
            </div>
        )
    }
}

module.exports = Show;