import SearchBar from './SearchBar.js'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('SearchBar', () => {
    let history
    let searchMovies
    let input
    let submitBtn

    beforeEach(() => {
        history = createMemoryHistory()

        searchMovies = jest.fn()

        render (
            <Router history={ history }>
                <SearchBar searchMovies={ searchMovies }/>
            </ Router>
        )

        input = screen.getByPlaceholderText('ex. Dead Pool')
        submitBtn = screen.getByAltText('search image')
    })

    it('should have an input and a button', () => {
        expect(screen.getByPlaceholderText('ex. Dead Pool')).toBeInTheDocument()
        expect(screen.getByAltText('search image')).toBeInTheDocument()
    })

    it('should call filter function on click with a search term', () => {
        userEvent.type(input, 'Hello, World!')
        userEvent.click(submitBtn)

        expect(searchMovies).toHaveBeenCalledWith("Hello, World!")
    })

    it('should clear the input after a search term is submitted', () => {
        userEvent.type(input, 'Hello, World!')
        userEvent.click(submitBtn)

        expect(input.value).toBe('');
    })
})
