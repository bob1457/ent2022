import { render } from '@testing-library/react';

<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';

=======
>>>>>>> 2a7844feb2976b2305401744444286acd6809f32
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
<<<<<<< HEAD
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
=======
    const { baseElement } = render(<App />);
>>>>>>> 2a7844feb2976b2305401744444286acd6809f32

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
<<<<<<< HEAD
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
=======
    const { getByText } = render(<App />);
>>>>>>> 2a7844feb2976b2305401744444286acd6809f32

    expect(getByText(/Welcome portal/gi)).toBeTruthy();
  });
});
