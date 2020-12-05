import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Card from './Card.js'
import '@testing-library/jest-dom'

//image and alt tag 

describe('Card', () => {

  it('should display render a complete card', () => {
    render(<Card
    id={2}
    src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
    alt="money plane"
    />)
  
    expect(screen.getByAltText("money plane movie cover")).toBeInTheDocument()
    //is there a way we can screen for src 
  })

  it('should show chosen movie is called with an ID', () => {
    const mockShowChosenMovie = jest.fn()
    render(<Card 
      id={2}
      src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
      alt="money plane"
      showChosenMovie={mockShowChosenMovie}
    />)

    const imgAlt = (screen.getByAltText("money plane movie cover"))

    fireEvent.click(imgAlt);

    expect(mockShowChosenMovie).toHaveBeenCalledWith(2);
  })
})



export default Card;