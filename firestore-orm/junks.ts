import { Timestamp } from "firebase/firestore";

export interface JunkType {
  title: string;
  story: string;
  dateAdded: Date;
  toString: () => string;
}

export class Junk implements JunkType {
  constructor(
    public title: string,
    public story: string,
    public dateAdded: Date 
  ) {
  }

  toString() {
    return this.title + ", " + this.story + ", " + this.dateAdded;
  }

  // Define custom objects
}