export class register {

    locators = {
        firstName: '#firstName',
        lastName: '#lastName',
        phoneNumber: '#phone',
        country: '#countries_dropdown_menu',
        email: '#emailAddress',
        password: '#password',
        terms: 'input[type="checkbox"]',
        registerButton: '#registerBtn'
    }

    openUrl() {
        cy.visit(Cypress.env('URL'))
    }




    typefirstName(FirstName) {
        cy.get(this.locators.firstName).type(FirstName)
    }

    typelastName(LastName) {
        cy.get(this.locators.lastName).type(LastName)
    }
    typephoneNumber(PhoneNumber) {
        cy.get(this.locators.phoneNumber).type(PhoneNumber)
    }

    selectCountry(CountryName) {
        cy.get(this.locators.country).select(CountryName)
    }

    typeemail(Email) {
        cy.get(this.locators.email).type(Email)
    }
    typePassword(Password) {
        cy.get(this.locators.password).type(Password)
    }
    selectCheckbox() {
        cy.get(this.locators.terms).check()
    }
    clickRegisterButton() {
        cy.get(this.locators.registerButton).click()
    }

}