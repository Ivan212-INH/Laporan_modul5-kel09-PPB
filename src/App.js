import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { FaBook, FaGooglePlay } from 'react-icons/fa'
import './App.css'
import Movie from './pages/Movie'
import Books from "./pages/Books"
import Games from "./pages/Games"
import Profile from './pages/Profile'
import DetailPage from "./pages/DetailPage"
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 09</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/books" element={<Books />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/detail/:id" element={<DetailPage />} />
        <Route path="/books/detail/:id" element={<DetailPage />} />
        <Route path="/games/detail/:id" element={<DetailPage />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/games" className="iconWrapper">
          <FaGooglePlay className="icon" /> Games
        </NavLink>
        <NavLink to="/books" className="iconWrapper">
          <FaBook className="icon" /> Books
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
