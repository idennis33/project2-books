const React = require("react");
const Default = require("../components/Default.jsx");
class Show extends React.Component {
  render() {
    const { title, author, description, img, finishedBook } = this.props.book;
    return (
      <Default>
        <div className="container d-flex p-4 flex-wrap card" style={{width: 'rem', backgroundColor:'lightyellow', textAlign:'center'}}>
          <h1>
            <p>{title}</p>
          </h1>
          <h2><p>By: {author}</p></h2>
          <img src={img} class="card-img-top"></img>
          <h3><p>{description}</p></h3>
          <h4 className={finishedBook?'green':'red'}>{finishedBook ? `Finished Book` : `Have not finished book`}</h4>
        </div>
      </Default>
    );
  }
}

module.exports = Show;
