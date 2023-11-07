import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailPage.css';

function DetailPage() {
    const { state } = useLocation();
    const movieData = state && state.movieData;

    if (!movieData) {
        return <div className="container">Error!: Movie data is not found.</div>;
    }

    return (
        <div className="container">
            <h1>{movieData.title}</h1>
            <img src={movieData.img} alt={movieData.title} className="detail-img" />
            <p className="detail-detail">Genre: {movieData.genre}</p>
            <p className="detail-detail">Summary: {movieData.desc}</p>
        </div>
    );
}

export default DetailPage;