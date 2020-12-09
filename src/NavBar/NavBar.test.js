import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar.js'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';


describe.only('NavBar', () => {
  let history = createMemoryHistory()
  it('should have a title and subtitle', () => {
    render(<Router history={history}><NavBar /></Router>)
    expect(screen.getByText('Welcome to Rancid Tomatillos!')).toBeInTheDocument()
    expect(screen.getByText('A page to view detailed movie reviews and their trailers')).toBeInTheDocument()
  })

  // it('should return to home ', () => {
  //   const mockReturnToHome = jest.fn()
    
  //   render(<NavBar
  //     returnToHome={mockReturnToHome}
  //     toggled={true}
  //     />)

  //   const homeBtn = screen.getByText('Home')

  //   fireEvent.click(homeBtn);

  //   screen.debug()
  //   expect(mockReturnToHome).toHaveBeenCalled()
  // })
})
