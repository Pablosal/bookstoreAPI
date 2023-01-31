export interface Books {
    books: Book[];
}

export interface Book {
    _id: string;
    title: string;
    description: string;
    price: number;
    number_of_pages: number;
    language: string;
    ISBN: string;
    author: string;
    date_of_publish: string;
    image: string;
}
