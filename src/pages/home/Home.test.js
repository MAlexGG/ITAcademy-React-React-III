import { screen, render } from "@testing-library/react";
import Router from '../../application/router/router';

test('should show a home button', () => {
    render(<Router/>);
    const btn = screen.getByRole('button', {name: /HOME/});
    expect(btn).toBeInTheDocument();

   /* // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(); */
})