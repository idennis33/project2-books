const React = require('react'); 
const Default2 = require("./components/Default2");
class Show extends React.Component{
    render(){
        const {title,author,description,img,finishedBook} = this.props.wish; 
        return(
            <Default2>
            <div>
                <h1>Wishlist Book</h1>
                <p>{title}</p>
                <p>{author}</p>
                <p>{description}</p>
                <img src= {img}></img>
                <p>{finishedBook ? `I finised the book` : `Haven't finished the book`}</p>
            </div>
            </Default2>
        )
    }
}

module.exports = Show; 