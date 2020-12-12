import React from 'react'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react'
import Card from './Card.js'
import '@testing-library/jest-dom'

describe('Card', () => {
  it('should display render a complete card', () => {
    const history = createMemoryHistory()

    render(
    <Router history={history}>
      <Card
      data-testid={2}
      src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
      title="money plane"
      aria-label="money plane"
      average_rating={6.7}
      />
    </Router>)

    expect(screen.getByAltText("money plane movie cover")).toBeInTheDocument()
    expect(screen.getByText('money plane')).toBeInTheDocument()
    expect(screen.getByText('67%')).toBeInTheDocument();
  })
})



