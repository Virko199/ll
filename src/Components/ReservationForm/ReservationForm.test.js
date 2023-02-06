import { render, screen } from "@testing-library/react";
import ReservationForm from './ReservationForm';

test('Renders the ReservationForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});