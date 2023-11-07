import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Games.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Lies of P", id: 1,
            rate: 4,
            genre: "RPG",
            img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3081722c6a53ec814b2e639b72077731.jpg",
            desc:"Lies of P is a thrilling soulslike that takes the story of Pinocchio, turns it on its head, and sets it against the darkly elegant backdrop of the Belle Epoque era."
        },
        {
            title: "Cyberpunk 2077", id: 2,
            rate: 3,
            genre: "FPS",
            img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/561adbb4e6094bef3c29e38ceb6bd929.jpg",
            desc:"Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification."
        },
        {
            title: "Hollow Knight: Silksong", id: 3,
            rate: 5,
            genre: "Metroidvania",
            img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/631bdec245c5f653cfddf9635f5a2f50.jpg",
            desc:"Discover a vast, haunted kingdom in Hollow Knight: Silksong! The sequel to the award winning action-adventure. Explore, fight and survive as you ascend to the peak of a land ruled by silk and song."
        },
        {
            title: "Resident Evil 4", id: 4,
            rate: 5,
            genre: "Horror",
            img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/1b1a8e1c60962dc3f07dd77229f36d5f.jpg",
            desc:"Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals. "
        },
        
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/games/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Games</p>
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
                <p id="movies">All Games</p>
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