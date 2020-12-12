import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar.js'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';


describe('NavBar', () => {
  let history = createMemoryHistory()
  it('should have a title and subtitle', () => {
    render(<Router history={history}><NavBar /></Router>)
    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument()
    expect(screen.getByText('A page to view detailed movie reviews and their trailers')).toBeInTheDocument()
  })
})
