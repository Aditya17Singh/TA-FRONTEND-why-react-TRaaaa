import data from "../data";
import PropTypes from "prop-types";

function Articles() {
  return (
    <>
      <div className="container wrapper flex flex-stretch">
        {data.map((text) => (
          <Card key={text.author} {...text} />
        ))}
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="card flex-20">
        <img className="image-width" src={props.urlToImage} alt="k" />
        <div className="title">{props.title}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Articles;
