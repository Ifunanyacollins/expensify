const greeting = (name) => `Good morning ${name}`

test('should return greeting',()=>{
    const greet = greeting('chika')
    expect(greet).toBe('Good morning chika')
})