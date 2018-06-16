const assert = require('assert')
const authorer = require('.')

console.log(authorer('Dhruv Jain <dhruvjainpenny@gmail.com> (https://maddhruv.github.io)'))
describe('authorer tests', () => {
  it('should return the name', () => {
    assert.equal(authorer('Dhruv Jain').name, 'Dhruv Jain')
  })
  it('should return the email', () => {
    assert.equal(authorer('<dhruvjainpenny@gmail.com>').email, 'dhruvjainpenny@gmail.com')
  })
  it('should return the website', () => {
    assert.equal(authorer('(https://maddhruv.github.io)').website, 'https://maddhruv.github.io')
  })
  it('should return all values', () => {
    assert.equal(authorer('Dhruv Jain <dhruvjainpenny@gmail.com> (https://maddhruv.github.io)').name, 'Dhruv Jain')
    assert.equal(authorer('Dhruv Jain <dhruvjainpenny@gmail.com> (https://maddhruv.github.io)').email, 'dhruvjainpenny@gmail.com')
    assert.equal(authorer('Dhruv Jain <dhruvjainpenny@gmail.com> (https://maddhruv.github.io)').website, 'https://maddhruv.github.io')
  })
})