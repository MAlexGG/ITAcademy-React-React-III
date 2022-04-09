import { screen, render } from "@testing-library/react";
import Starships from './Starships';


test('should show a view more button', () => {
    render(<Starships />);
    const btn = screen.getByRole('button', { name: /view more/i });
    expect(btn).toBeInTheDocument();
})