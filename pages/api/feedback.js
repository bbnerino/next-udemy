import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};
export const extractFeedBack = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  console.log("🍎", req);
  if (req.method === "POST") {
    // {email:"test@naver.com,text: "hi"}
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: text,
    };
    //
    const filePath = buildFeedbackPath();
    const data = extractFeedBack(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", data: newFeedback });
  } else if (req.method === "GET") {
    const filePath = buildFeedbackPath();
    const data = extractFeedBack(filePath);
    res.status(200).json({ feedbacks: data });
  } else {
    res.status(200).json({ message:"hi"});
  }
};
export default handler;
