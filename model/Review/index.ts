import { Document, Schema, model, Types } from "mongoose";
// import { IReview } from '../interface';

const reviewSchema = new Schema<any>(
  {
    quality: {
      type: String,
      required: [true, "Quality is required"],
    },
    feedback: {
      type: String,
    },
    recommend: {
      type: Number,
      required: [true, "Quality is required"],
    },
    reviewerId: {
      type: Schema.Types.ObjectId,
      ref: "customers",
    },
    associatedServiceman: {
      type: Schema.Types.ObjectId,
      ref: "serviceman",
    },
    associatedJob: {
      type: Schema.Types.ObjectId,
      ref: "service",
    },
  },
  {
    timestamps: true,
  }
);

const Review = model<any>("Review", reviewSchema);

export default Review;
