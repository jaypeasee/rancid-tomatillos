import Error from './Error'

import '@testing-library/jest-dom'
import {screen, render} from '@testing-library/react'

describe('Error', () => {
    it('should have a message', () => {
        render(<Error />)

        expect(screen.getByText('Oops! This page is not found.')).toBeInTheDocument();
    })
})