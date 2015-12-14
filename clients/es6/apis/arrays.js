describe("new array methods", function(){

  it("has values, key, and entries", function(){
    var names = ["Scott", "Alex"];

    let values = names.values();
    let keys = names.keys();
    let entries = names.entries();
    
    expect(values.next().value).toBe("Scott");
    expect(keys.next().value).toBe(0);
    expect(entries.next().value[1]).toBe("Scott");

    expect(names.values).toBeDefined();
    expect(names.keys).toBeDefined();
    expect(names.entries).toBeDefined();
    
    expect(names.wat).toBeUndefined();
  })

  it("adds find and findIndex", () => {
    
    let numbers = [15,11,3];
    let people = [{ name: "Scott"}, { name: "Allen"}];
    
    let eleven = numbers.find(n => n === 11);
    let index = people.findIndex(p => p.name === "Allen");
    
    expect(eleven).toBe(11);
    expect(index).toBe(1);
    
  });

  it("create new arrays with of and from", function() {
    
    let numbers = Array.of(15, 11, 3);    
    expect(numbers.length).toBe(3);
    
    let squared = Array.from(numbers, n => n * n);
    expect(squared[2]).toBe(9);
    
  });

});
