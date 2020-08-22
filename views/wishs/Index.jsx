const React = require("react");
const Default2 = require("./components/Default2");

class Index extends React.Component {
  render() {
    const { wishs } = this.props;
    return (
      <Default2>
        <div>
          <ul>
            {wishs.map((wish, i) => {
              return (
                <li>
                    <h1>Book Wish List</h1>
                  <h1>
                    <a href={`/wishs/${wish._id}`}>{wish.title}</a>
                  </h1>
                  <h2>{wish.author}</h2>
                  <img src={wish.img}></img> <br></br>
                  <h3>{wish.description}</h3>
                  {wish.finishedBook
                    ? `I finished the book`
                    : `I haven't finished it yet`}
                  {/* /fruits/id_of_the_fruit/override_post_method */}
                  <form
                    action={`/wishs/${wish._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="delete" />
                  </form>
                  {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                  <a href={`/wishs/${wish._id}/edit`}>Edit</a>
                </li>
              );
            })}
          </ul>
        </div>
      </Default2>
    );
  }
}

module.exports = Index;
