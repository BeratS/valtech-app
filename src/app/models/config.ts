export interface IAlbums {
    id: string;
    author: string;
    download_url: string;
    url: string;
    width: number;
    height: number;
}

export interface IMyAlbums {
    id: number;
    name: string;
    date: Date;
    imgs: string[];
}