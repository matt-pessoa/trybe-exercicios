import { screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";
import { About } from "./App";

it("deve renderizar o componente About (apenas componente)", () => {
	renderWithRouter(<About />);

	const aboutTitle = screen.getByRole("heading", {
		name: "Você está na página Sobre",
	});
	expect(aboutTitle).toBeInTheDocument();
});
