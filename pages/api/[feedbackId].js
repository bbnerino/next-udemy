import { buildFeedbackPath, extractFeedBack } from "./feedback";

function handler(req, res) {
  if(req.method==="DELETE"){
    //
  }
  if(req.method==="GET"){
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedBack(filePath);
    const data = feedbackData.find((feedback) => feedback.id === feedbackId);
    res.status(200).json({feedback:data})
  }
}
export default handler;
