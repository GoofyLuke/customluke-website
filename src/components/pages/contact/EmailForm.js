import React from "react";
import ReactContactForm from "react-mail-form";
import styled from "styled-components";

export default function EmailForm() {
  const Form = styled(ReactContactForm)`
    margin: auto;
    font-size: 14px;
    text-align: center;
    input,
    textarea {
      display: block;
      margin: 12px auto;
      width: 100%;
      max-width: 480px;
      border: 1px solid #555;
      outline: 0;
      font-size: 16px;
    }
    input {
      padding: 12px 6px;
    }
    textarea {
      padding: 6px;
      height: 50%;
    }
    a {
      display: block;
      margin: auto;
      width: 120px;
      height: 3em;
      line-height: 3em;
      color: #fff;
      background-color: rgb(255, 105, 120);
      font-size: 16px;
      font-weight: 900;
      text-decoration: blink;
      &:visited,
      &:hover,
      &:focus,
      &:active {
        color: #fff;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  `;

  return (
    <div className="">
      <hr className="w-75" />
      <p className="lead"> Send me an email!</p>
      <Form
        to="lukekennyx@gmail.com"
        titlePlaceholder="Subject..."
        contentsPlaceholder="Message..."
        buttonText="Send"
      />
    </div>
  );
}
