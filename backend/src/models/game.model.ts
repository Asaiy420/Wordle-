import { Schema, model, Document } from "mongoose";

interface IGame extends Document {
  targetWord: string;
  currentAttempt: number;
  maxAttempts: number;
  status: "in_progress" | "won" | "lost";
  guesses: string[];
  feedback: Array<
    {
      letter: string;
      status: "correct" | "present" | "absent";
    }[]
  >;
  userId: Schema.Types.ObjectId;
  startTime: Date;
  endTime?: Date;
}

const gameSchema = new Schema<IGame>({
  targetWord: {
    type: String,
    required: true,
  },
  currentAttempt: {
    type: Number,
    default: 0,
  },
  maxAttempts: {
    type: Number,
    default: 6,
  },
  status: {
    type: String,
    enum: ["in_progress", "won", "lost"],
    default: "in_progress",
  },
  guesses: [
    {
      type: String,
    },
  ],
  feedback: [
    {
      type: [
        {
          letter: String,
          status: {
            type: String,
            enum: ["correct", "present", "absent"],
          },
        },
      ],
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
});

export const Game = model<IGame>("Game", gameSchema);
