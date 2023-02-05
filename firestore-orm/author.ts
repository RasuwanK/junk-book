export interface AuthorType {
    userName: string; 
}

export class Author implements AuthorType {
  constructor(
    public userName: string,
  ) {}

  // Define custom objects
}