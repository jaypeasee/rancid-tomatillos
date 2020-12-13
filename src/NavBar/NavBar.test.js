import NavBar from './NavBar.js'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


describe('NavBar', () => {
  it('should have a title and subtitle', () => {
    const history = createMemoryHistory()

    render(
      <Router history={ history }><NavBar /></Router>
    )
    
    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument()
    expect(screen.getByText('A page to view detailed movie reviews and their trailers')).toBeInTheDocument()
  })
})
