export interface Song {
  id: string;
  title: string;
  album: string;
  genre: string;
  file: string;
  posted_at: Date;
  author_id: string;
}

export interface SongDTO {
  title: string;
  album: string;
  genre: string;
  file: string;
}
