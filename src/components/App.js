import GlobalStyle from '../styles/GlobalStyle'
import Navbar from './Navbar'
import MovieScreen from './MovieScreen'
import MovieSessions from './MovieSessions'
import Seats from './Seats'
// import Success from './Success'
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<MovieScreen />} />
                <Route path="/movies/:movieId" element={<MovieSessions />} />
                <Route path="/seats/:sessionId" element={<Seats />} />
            </Routes>
        </BrowserRouter>

    )
}
