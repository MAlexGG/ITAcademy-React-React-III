import React from "react";
import { screen, render } from "@testing-library/react";
import Header from './Header';


describe("Header", () => {
    it("must display a home tab", () => {
        render(<Header />);
        expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    });
});