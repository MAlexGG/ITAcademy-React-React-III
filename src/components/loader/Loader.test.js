import { screen, render } from "@testing-library/react";
import Loader from './Loader';


test('should display a loading text', () => {
    render(<Loader />);
    const load = screen.getByText(/loading/i);
    expect(load).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
});
