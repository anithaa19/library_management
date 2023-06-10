export interface Book {
    bookCategories:number;
    totalBooksAvailable:number;
    rentedBooks:number;
}

// export interface BookList {
//     bookId:number;
//     bookName:string;
//     authorName:string;
//     bookCategory:string;
//     bookISBN:string;
//     bookCoverImg:boolean;
//     rating:number;
    
// }


export interface BookList {
    _id?:string;
    name:string;
    authorname:string;
    bookcategory:string;
    isbn:string;
    coverimage:string;
    rating:number;
    copiesavailable:number;
    rentedcopies:number;    
}