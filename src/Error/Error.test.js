import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from './Error'

describe('Error', () => {
    it('should have a message', () => {
        render(<Error />)
        
        expect(screen.getByText('Oops! This page is not found.')).toBeInTheDocument();
    })
})