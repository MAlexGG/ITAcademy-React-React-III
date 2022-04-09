import { screen, render } from "@testing-library/react";
import Home from "./Home";

test('should show a starships button', () => {
    render(<Home/>);
    const btn = screen.getByRole('button', {name: /starships/i});
    expect(btn).toBeInTheDocument();
})