//import chai, declare expect variable
const expect = require ('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizz buzzer function
describe('fizzBuzzer', function()
{

    //test the normal case
    it(`should return the correct phrase based on the 
        divisibility of the input, or the num`, function()
    {   
        //range of normal inputs, including
        //a number not divisible by 3, 5 or 15
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 30, expected: 'fizz-buzz'},
            {a: 10, expected: 'buzz'},
            {a: 6, expected: 'fizz'},
            {a: 2, expected: 2}
        ];

        //for each normal input, 'fizzBuzzer' should return 
        //the expected phrase
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });

    });

    //test error case
    it(`should raise error if args not number`, function()
    {
        //range of bad inputs
        const badInputs = ['a', '1', false];
        
        //prove an error is thrown for bad inputs
        badInputs.forEach(function(inpout)
        {
            expect(function()
            {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});