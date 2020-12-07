import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar.js'


describe('NavBar', () => {
  it('should have a title and subtitle', () => {
    render(<NavBar />)
  
    
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

  
  //   expect(mockReturnToHome).toHaveBeenCalledWith()
  // })
})
