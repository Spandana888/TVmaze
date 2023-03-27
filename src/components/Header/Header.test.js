import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

describe("Header", ()=>{
    test("Header components contains title", ()=>{
        render(<Header />);
        const header = screen.getByTestId("app-header");
        expect(header).not.toBeEmptyDOMElement
    });
     test("Header components contains title TVmaze", () => {
       render(<Header />);
       const headerText = screen.getByTestId("app-header");
       expect(headerText).toHaveTextContent("TVmaze");
     });
     test("Header componenets contains search", () => {
       render(<Header />);
       const searchbar = screen.getByTestId("app-search");
       expect(searchbar).not.toBeEmptyDOMElement();
    });
    test("Header componenets contains form", () => {
       render(<Header />);
       const searchform = screen.getByRole("form");
       expect(searchform).not.toBeEmptyDOMElement();
    });
    test("Header componenets contains form", () => {
      render(<Header />);
      const placeholder = screen.getByPlaceholderText(/Search/i)
      expect(placeholder).toHaveAttribute("type", "text");
      expect(placeholder).toHaveAttribute("id", "search-text");
    });
})