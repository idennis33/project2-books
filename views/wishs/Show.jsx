const React = require('react'); 
const Default2 = require("./components/Default2");
class Show extends React.Component{
    render(){
        const {title,author,description,img,finishedBook} = this.props.wish; 
        return(
            <Default2>
            <div className="container d-flex p-4 flex-wrap card" style={{width: 'rem'}}>
                <h1>Wishlist Book</h1>
                <p>{title}</p>
                <p>{author}</p>
                <img src= {img} class="card-img-top"></img>
                <p>{description}</p>
                <p>{finishedBook ? `I finised the book` : `Haven't finished the book`}</p>
            </div>
            </Default2>
        )
    }
}

module.exports = Show; 