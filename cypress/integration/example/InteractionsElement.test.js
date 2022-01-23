describe("Interactions element", () => {
  beforeEach(() => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
  });

  it("select radio button", () => {
    cy.get("select").select("Opel").should("have.value", "opel");
  });

  it("select dropdown list", () => {
    cy.get('input[type="radio"]')
      .check("female")
      .should("have.value", "female");
    cy.get('input[type="radio"]').check("other");
  });

  it("click element with  link", () => {
    cy.get('a[href="../link-success/"').click();
    cy.get(".entry-title").should("contain", "Link success");
    cy.get(".entry-title")
      .invoke("text")
      .then((label) => {
        expect(label).eq("Link success");
      });
  });

  it("click element with  id", () => {
    cy.get('a[id="idExample"]').click();
    cy.get(".entry-title").should("contain", "Button success");
    cy.get(".entry-title")
      .invoke("text")
      .then((label) => {
        expect(label).eq("Button success");
      });
  });
});

//     const element = ["Volvo", "Saab", "Opel"];
// for (let i = 0; i < element.length; i++) {
//   cy.get("select")
//     .select(element[i])
//     .should("have.value", element[i].toLowerCase());
// }

// cy.contains("Software Development Engineer in Test").should(
//   "contain",
//   "Software Development Engineer in Test"
// );
