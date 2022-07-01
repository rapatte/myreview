import * as React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { Link, MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('<NavBar/>', () => {
  it('renders a span ', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    screen.debug();

    const element = screen.getByText('Paramètres');
    expect(element).toBeInTheDocument();
  });

  test('should navigate to ... when link is clicked', () => {
    const { getByTestId } = render(<NavBar />, { wrapper: MemoryRouter });
    const headerElement = getByTestId('parametre');
    expect(headerElement.textContent).toBe('Paramètres');
  });
  it('should be a link that have href value to "/NavBar"', () => {
    const { getByTestId } = render(<NavBar />, { wrapper: MemoryRouter });
    const hrefElement = getByTestId('parametre');
    expect(hrefElement).toHaveAttribute('href', '/paramètres');
  });
  it('should be a link that have href value to "/NavBar"', () => {
    const { getByTestId } = render(<NavBar />, { wrapper: MemoryRouter });
    const hrefElement = getByTestId('parametre') as HTMLAnchorElement;
    expect(hrefElement.href).toBe('http://localhost/param%C3%A8tres');
  });

  it('should be a link that have href value to "/NavBar"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );
    const hrefElement = screen.getByTestId('parametre') as HTMLAnchorElement;

    fireEvent.click(hrefElement);

    expect(history.location.pathname).toEqual('/paramètres');
  });

  it('should be a link that have href value to "/NavBar"', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const ElementMission = screen.getByText('Missions') as HTMLAnchorElement;

    expect(ElementMission.closest('a')).toHaveAttribute('href', '/missions');
    expect(ElementMission.href).toBe('http://localhost/missions');
  });
});
