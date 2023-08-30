import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  title: { type: String},
  questionBody: { type: String },
  questionTags: { type: [String]},
  noOfAnswers: { type: Number, default: 0 },
  upVote: { type: [String], default: [] },
  downVote: { type: [String], default: [] },
  userPosted: { type: String },
  userId: { type: String },
  askedOn: { type: Date, default: Date.now },
  answer: [
    {
      answerBody: String,
      userAnswered: String,
      userId: String,
      answeredOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Question", QuestionSchema);