import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar.js'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('SearchBar', () => {
    it('should have an input and a button', () => {
        const history = createMemoryHistory()
        render (
            <Router history={history}>
                <SearchBar searchMovies={jest.fn()}/>
            </ Router>
        )
        expect(screen.getByPlaceholderText('ex. Dead Pool')).toBeInTheDocument()
        expect(screen.getByAltText('search image')).toBeInTheDocument()
    })
    it('should call filter function on click with a search term', () => {
        const history = createMemoryHistory()
        const searchMovies = jest.fn()
        render (
            <Router history={history}>
                <SearchBar searchMovies={searchMovies}/>
            </ Router>
        )
        const input = screen.getByPlaceholderText('ex. Dead Pool')
        const submitBtn = screen.getByAltText('search image')
        userEvent.type(input, 'Hello, World!')
        userEvent.click(submitBtn)
        expect(searchMovies).toHaveBeenCalledWith("Hello, World!")
    })
})
