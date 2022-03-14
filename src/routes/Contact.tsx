import React from "react";
import linked from "styled-components";
import { Instagram } from "react-feather";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <a className="icon-link" href={""} target={"_blank"}>
        Instagram
        <Instagram size={24} />
      </a>
    </>
  );
};

export default Contact;
