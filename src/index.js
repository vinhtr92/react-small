import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const card = "card__";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      herotext: "Learning React? Start Small",
      name: "dave ceddia",
      authorImg: "http://picsum.photos/300/300",
      authorHref: "#",
      userImg: "http://picsum.photos/200/200",
      postTitle: "Learning react,start small"
    };
  }

  render() {
    return (
      <div className="card">
        <Cardhero
          text={this.state.herotext}
          author={this.state.name}
          authorImg={this.state.authorImg}
          userImg={this.state.userImg}
        />

        <Cardcontent title={this.state.postTitle} />
      </div>
    );
  }
}

const Cardhero = props => {
  return (
    <div className="card__hero">
      <User img={props.userImg} />
      <h2 className="card__hero-text">{props.text}</h2>
      <Author
        name={props.author}
        src={props.authorImg}
        // href={props.authorHref}
      />
    </div>
  );
};

const Cardcontent = props => {
  return (
    <div className="card__content">
      <h2 className="card__content-title">
        <a href={props.titleHref || "#"}>
          {props.title || "lorem picsum dolor"}
        </a>
      </h2>
      <div className="card__content-desc">
        {props.desc || "lorem ipsum dolor sit amet,lorem dolor ipsum sit amet"}
      </div>
    </div>
  );
};

const Author = props => {
  return (
    <a className="card__author" href={props.href || "#"}>
      <h2>{props.name}</h2>
      <img src={props.src} alt="#" />
    </a>
  );
};

const User = props => {
  return (
    <a className="card__user" href={props.href || "#"}>
      <img src={props.img} alt="#" />
    </a>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CardComponent />, rootElement);
