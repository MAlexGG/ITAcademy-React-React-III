import React from "react";
import { screen, render } from "@testing-library/react";
import Loader from './Loader';


describe("Loader", () => {
    it("must display a loading text", () => {
        render(<Loader />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});