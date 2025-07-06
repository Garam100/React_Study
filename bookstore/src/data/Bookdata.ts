export interface Book{
    id: number;
    title : string;
    content : string;
    price : number;
    author: string;
    star: string;
}

const bookdata: Book[] = [
    {id: 1,
    title : '1퍼센트 부자들의 법칙',
    content : '돈을 많이 벌 수 있는 방법을 소개함',
    price : 34000,
    author: '가나다',
    star: '⭐⭐⭐⭐'}
    ,
    {id: 1,
    title : '1퍼센트 부자들의 법칙',
    content : '돈을 많이 벌 수 있는 방법을 소개함',
    price : 31900,
    author: '라마바',
    star: '⭐⭐⭐⭐⭐'},
    {id: 1,
    title : '1퍼센트 부자들의 법칙',
    content : '돈을 많이 벌 수 있는 방법을 소개함',
    price : 25000,
    author: '사아자',
    star: '⭐⭐⭐'}
]

export default bookdata;