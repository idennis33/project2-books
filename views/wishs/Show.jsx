const React = require('react'); 

class Show extends React.Component{
    render(){
        const {title,author,description,img,finishedBook} = this.props.wish; 
        return(
            <div>
                <h1>Wishlist Book</h1>
                <p>{title}</p>
                <p>{author}</p>
                <p>{description}</p>
                <img src= {img}></img>
                <p>{finishedBook ? `I finised the book` : `Haven't finished the book`}</p>
            </div>
        )
    }
}

module.exports = Show; 