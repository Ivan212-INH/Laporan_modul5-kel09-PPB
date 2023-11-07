import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Books.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "The Art of War", id: 1,
            rate: 4,
            genre: "Philosophy",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg",
            desc:"Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life."
        },
        {
            title: "The Elder Scrolls Cookbook", id: 2,
            rate: 5,
            genre: "Cookbooks",
            img: "https://m.media-amazon.com/images/I/81BE4xFZDSL._SL1500_.jpg",
            desc:"Feast on all of the delicious dishes found in Skyrim, Morrowind, and all of Tamriel in this beautifully crafted cookbook based on the award-winning Elder Scrolls game series."
        },
        {
            title: "The Lorax", id: 3,
            rate: 4,
            genre: "Fiction",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327879938i/7784.jpg",
            desc:"Long before saving the earth became a global concern, Dr. Seuss, speaking through his character the Lorax, warned against mindless progress and the danger it posed to the earth's natural beauty."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/books/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)}
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Books</p>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate}
                            onClick={() => navigateToDetailPage(item)}
                        />
                        {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}