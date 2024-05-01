import "./Book.scss"

interface Book {
    title: string
    author: string
    coverId: number
}


export default function Book ({ title, author, coverId}) {
    return (
        <>
            <div className="card">
                <div className="card-banner">
                    <img src={
              coverId
                ? "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
                : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
            } 
                alt="card-banner" 
                />
                </div>
                <h3>{title}</h3>
                <div className="card-footer">
                    <span>
                        Author: <span className="author-name">{author}</span>
                    </span>
                </div>
            </div>
        </>
    )
}