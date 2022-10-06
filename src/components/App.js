import GlobalStyle from '../styles/GlobalStyle'
import React from 'react'
import Navbar from './Navbar'
import MovieScreen from './MovieScreen'
// import MovieSessions from './MovieSessions'
// import Seats from './Seats'
// import Success from './Success'


export default function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <MovieScreen />
            {/* <MovieSessions />
            <Seats />
            <Success /> */}
        </>

    )
}
