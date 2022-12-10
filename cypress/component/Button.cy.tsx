import React from "react";
import Button from "./Button";

it("<Button>", () => {
  cy.mount(<Button>Click me!</Button>);
  cy.get("button").should("contains.text", "Click me!");
});
