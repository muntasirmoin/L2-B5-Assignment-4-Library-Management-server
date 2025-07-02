import { model, Schema } from "mongoose";
import { BookModel, IBook } from "../interface/books.interface";
import { boolean, string } from "zod";
import { IBorrow } from "../interface/borrow.interface";
import validator from "validator";
import { borrow } from "./borrow.model";

const booksSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, "Genre is Required"],
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message: "It is not valid genre",
      },
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.isISBN(value),
        message: `Invalid ISBN format`,
      },
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
      validate: {
        validator: Number.isInteger,
        message: "Copies must be a positive number",
      },
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

booksSchema.statics.updateCopies = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) {
    throw new Error("book not found");
  }
  if (book.copies < quantity) {
    throw new Error(`not enough copies available! Copies : ${book.copies}`);
  }
  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
};

booksSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await borrow.deleteMany({ book: doc._id });
  }
});

export const books = model<IBook, BookModel>("books", booksSchema);
