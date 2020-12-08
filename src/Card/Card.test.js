import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Card from './Card.js'
import '@testing-library/jest-dom'

//image and alt tag 

describe('Card', () => {

  it('should display render a complete card', () => {
    render(<Card
    data-testid={2}
    src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
    title="money plane"
    aria-label="money plane"
    average_rating={6.7}
    />)
    expect(screen.getByAltText("money plane movie cover")).toBeInTheDocument()
    expect(screen.getByText('money plane')).toBeInTheDocument()
    expect(screen.getByText('Rating: 6.7')).toBeInTheDocument();
  })

  it('should show chosen movie is called with an ID', () => {
    const mockShowChosenMovie = jest.fn()
    render(<Card 
      id={2}
      src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
      title="money plane"
      showChosenMovie={mockShowChosenMovie}
    />)

    const imgAlt = (screen.getByAltText("money plane movie cover"))

    fireEvent.click(imgAlt);

    expect(mockShowChosenMovie).toHaveBeenCalledWith(2);
  })
})



