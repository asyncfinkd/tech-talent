import mongoose from "mongoose";

const Options: any = {
    useNewUrlParser: true,
    useUnifiedTypology: true
}

export const Connect = (URL: string) => {
    mongoose.connect(
        URL,
        Options,
        () => {
          console.log("Connected to MongoDB");
        }
      );
};