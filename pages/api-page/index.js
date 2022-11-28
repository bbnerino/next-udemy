import React, { useRef, useState } from "react";

const index = () => {
  const emailInput = useRef();
  const feedBackInput = useRef();
  const [feedbacks,setFeedbacks] = useState([])
  const submit = (event) => {
    event.preventDefault();
    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedBackInput.current.value;
    const bodyData = JSON.stringify({
      email: enteredEmail,
      text: enteredFeedback,
    });
    // {email:"test@naver.com,text: "hi"}

    fetch("/api/feedback", {
      method: "POST",
      body: bodyData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    load()
  };

  const load = ()=>{
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data.feedbacks));
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">U R EMAIL</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea row="5" id="feedback" ref={feedBackInput} />
        </div>
        <button onSubmit={submit}>submit</button>
      </form>

      <hr></hr>
      <button onClick={()=>{load()}}>불러오기</button>
      {feedbacks.map((feedback)=><li key={feedback.id}>{feedback.text}</li>)}
    </div>
  );
};

export default index;
