const math = require('./math')


test('adds two numbers', ()=>{
    expect(math.add(2,2)).toEqual(4);
})