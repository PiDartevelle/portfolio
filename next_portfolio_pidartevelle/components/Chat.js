import Link from "next/link";
import React from "react";

function Chat() {
  return (
    <h3>
      Wanna know more? <br />
      We should definitely have a{" "}
      <Link href="/contact">
        <a className="surprise_chat">chat</a>
      </Link>
    </h3>
  );
}

export default Chat;
