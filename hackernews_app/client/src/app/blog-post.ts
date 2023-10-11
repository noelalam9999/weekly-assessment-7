type Comment = {_id: string, comment: string};

export interface BlogPost {
  _id: string,
  title: string,
  body: string,
  hidden: boolean,
  votes: number,
  comments: Comment[],
  date: string,
  _v: number
}
