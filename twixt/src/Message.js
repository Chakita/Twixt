import React from "react";

const Message = ({ chat, user }) => (
  <li className={`chat ${user === chat.username ? "right" : "left"}`}>
    {user !== chat.username && <div id="username">{`${chat.username}:`} </div>}
    {chat.content}
  </li>
);

export default Message;
