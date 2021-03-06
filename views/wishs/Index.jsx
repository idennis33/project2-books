const React = require("react");
const Default2 = require("./components/Default2");

class Index extends React.Component {
  render() {
    const { wishs } = this.props;
    return (
      <Default2>
        <div>
          <ul className="container d-flex p-4 flex-wrap"style={{gap:"5px"}}>
            {wishs.map((wish, i) => {
              return (
                <div className="card" style={{width: '20rem', textAlign:'center',backgroundColor:'lightyellow',opacity:'.9',padding:'10'}}>
                <li style={{listStyleType:'none'}}>
                  <h1>
                    <a href={`/wishs/${wish._id}`}>{wish.title}</a>
                  </h1>
                  <h2>By: {wish.author}</h2>
                  <a href={`/wishs/${wish._id}`}><img src={wish.img}></img></a> <br></br>
                  <h4 className={wish.finishedBook?'green':'red'}>{wish.finishedBook
                    ? `I finished the book`
                    : `I haven't finished it yet`}</h4>
                  <form
                    action={`/wishs/${wish._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form action={`/wishs/${wish._id}/edit`}><input type = 'submit' value= 'EDIT'/>
                  </form>
                </li>
                </div>
              );
            })}
          </ul>
        </div>
      </Default2>
    );
  }
}

module.exports = Index;
