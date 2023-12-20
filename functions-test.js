// functions-test.js

const assert = require('chai').assert;
const addTwoNumbers = require('./functions.js').addTwoNumbers;
const sayHello = require('./functions.js').sayHello;
const buildCar = require('./functions.js').buildCar;

describe('functions', function () {
  describe('addTwoNumbers', function () {
    it('should be able to add zero to zero', function () {
      // setup for test (if necessary)

      // execute function
      const sum = addTwoNumbers(0, 0)

      // assert what the result SHOULD be
      assert.equal(sum, 0)
    })

    it('should be able to add 1 to 0', function () {
      assert.equal(addTwoNumbers(1, 0), 1)
    })

    it('should be able to add 1 to 1', function () {
      assert.equal(addTwoNumbers(1, 1), 2)
    })
  })

  describe('sayHello', function () {
    it('should be able to say hello to Leta', function () {
      // setup for test (if necessary)

      // execute function
      const greeting = sayHello('Leta')

      // assert what the result SHOULD be
      assert.equal(greeting, 'Hi there Leta!')
    })

    it('should be able to say hello to Casey', function () {
      assert.equal(sayHello('Casey'), 'Hi there Casey!')
    })

    it('should not be able to say hello to Will', function () {
      const differentMessage = sayHello('Will')

      assert.equal(differentMessage, 'No more testing Will!')
    })
  })

  describe('buildCar', function () {
    it('should return a car with a color', function () {
      // setup for test (if necessary)
      const color = 'red'

      // execute function
      const carDetails = buildCar(color)

      // assert what the result SHOULD be
      assert.equal(carDetails.color, color)
    })

    it('should return a car with a type', function () {
      const carInfo = buildCar('red', 'truck')

      assert.equal(carInfo.type, 'truck')
    })

    it('should return an empty object if there are no details passed', function () {
      assert.deepEqual(buildCar(), {})
    })
  })
})
