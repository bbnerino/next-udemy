import React, { useState } from "react";
import { buildFeedbackPath, extractFeedBack } from "../api/feedback";

const index = (props) => {
  const [feedback,setFeedback] = useState()
  const loadFeedback = (id) => {
    fetch(`/api/${id}`)
    .then((res)=>res.json())
    .then((data)=>{setFeedback(data.feedback)})
  };

  return (
    <div>
      {props.feedbacks.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => loadFeedback(item.id)}>show Detail</button>
        </li>
      ))}
      {feedback && <h1>{feedback.email}</h1>}
    </div>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedBack(filePath);
  return {
    props: {
      feedbacks: data,
    },
  };
}

export default index;
