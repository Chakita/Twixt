import React from "react";
import ReactDOM from "react-dom";
import "./styling/chat.css";

import Message from "./Message.js";

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        {
          username: "Admin",
          content: <p>Welcome to the discussions page!</p>,
        },
        {
          username: "XYZ",
          content: <p>Heyy</p>,
        },
        {
          username: "Chakita",
          content: <p>Hello everybody! :)</p>,
        },
        {
          username: "Pratheek",
          content: (
            <p>
              This was done as part of our Web Tech project at PES university!
            </p>
          ),
        },
        {
          username: "Chakita",
          content: <p>This is the discussions page</p>,
        },
        {
          username: "Chakita",
          content: <p>You can discuss anything about anything here!</p>,
        },
        {
          username: "XYZ",
          content: <p>Sounds great!</p>,
        },
      ],
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(
      this.refs.chats
    ).scrollHeight;
  }

  submitMessage(e) {
    e.preventDefault();

    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: "Chakita",
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
          },
        ]),
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
      }
    );
  }

  render() {
    const username = "Chakita";
    const { chats } = this.state;

    return (
      <div className="chatroom">
        <h3>Discussions</h3>
        <ul className="chats" ref="chats">
          {chats.map((chat) => (
            <Message chat={chat} user={username} />
          ))}
        </ul>
        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chatroom;
