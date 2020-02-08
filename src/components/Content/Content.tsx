import React from 'react';
import ReactMarkdown from "react-markdown";
//@ts-ignore
import Twain from 'mark-twain'

type Props = {
  text: string
}

const Content = ({ text }: Props) => {
  function parsed() {
    return Twain(text).content.slice(1)
  }
  
  console.log(parsed());
  return (
    <div>
      <ReactMarkdown source={ text }/>
    </div>
  )
};
export default Content;
