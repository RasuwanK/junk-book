export interface JunkType {
  title: string;
  story: string;
  dateAdded: Date;
  index: string[];
  toString: () => string;
}

export class Junk implements JunkType {
  constructor(
    public title: string,
    public story: string,
    public dateAdded: Date,
    public index: string[]
  ) {}

  toString() {
    return this.title + ", " + this.story + ", " + this.dateAdded + ", " + this.index.toString();
  }

  // Define custom objects
}
