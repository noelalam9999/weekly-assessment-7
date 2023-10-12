export interface News {
  _id: string;
  title: string;
  body: string;
  url: string;
  date: number;
  votes: number;
  comments: { content: string; date: string; id: string }[];
}
