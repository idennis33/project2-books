const React = require("react");
const Default = require("../components/Default.jsx");
class Show extends React.Component {
  render() {
    const { title, author, description, img, finishedBook } = this.props.book;
    return (
      <Default>
        <div className="container d-flex p-4 flex-wrap card" style={{width: 'rem', backgroundColor:'whitesmoke'}}>
          <h1>
            <p>{title}</p>
          </h1>
          <h2><p>The {author}</p></h2>
          <img src={img} class="card-img-top"></img>
          <h3><p>{description}</p></h3>
          <p>{finishedBook ? `Finished Book` : `Have not finished book`}</p>
        </div>
      </Default>
    );
  }
}

module.exports = Show;
