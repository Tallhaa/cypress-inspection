import { register } from '../../pages/register'
import registerValues from '../../fixtures/register.json'

let registerObj = new register()

describe('register', () => {
    it('register TC1', () => {
        registerObj.openUrl()
        registerObj.typefirstName(registerValues.FirstName)
        registerObj.typelastName(registerValues.LastName)
        registerObj.typephoneNumber(registerValues.PhoneNumber)
        registerObj.selectCountry(registerValues.country)
        registerObj.typeemail(registerValues.email)
        registerObj.typePassword(registerValues.password)
        registerObj.selectCheckbox()
        registerObj.clickRegisterButton()



    })
})