import React, {useState, useEffect} from 'react'
import SingleBook from './SingleBook';



const AllTheBooks = () => {
    const [books, setBooks] = useState([]); // 책데이터를 저장하기위해..
    const [searchText, setSearchText] = useState(''); //검색창에 입력된 텍스트를 저장


    useEffect(() => {
        fetch('/books/fantasy.json')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.log(error));
    }, []); // 딱 한번만 렌더링되게..



    return (
        <div>
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        placeholder="Search by title..."
                    />
                </div>
            </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
            {books
                .filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((book, index) => (
                    <SingleBook key={index} book={book} />
                ))}
        </div>
    </div>
    );
};



export default AllTheBooks;



        // <div className="container mt-5">
        // <div className="row">
        //     {books.map((book, index) => (
        //         <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 my-5">
        //             <div class="card my-3 mx-auto text-center">
        //                 <div className="card-img-container">
        //                 <img src={book.img} className="card-img-top book-img" alt={book.title} />
        //                 <div className="card-body pt-4">
        //                     <h6 className="card-title fw-bold">{book.title}</h6>
        //                     <p className="card-text pt-1">Category: {book.category}</p>
        //                     <p className="card-text">Price: ${book.price}</p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>