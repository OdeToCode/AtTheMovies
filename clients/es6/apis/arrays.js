describe("new array methods", function(){

  it("has values, key, and entries", function(){
    var names = ["Scott", "Alex"];

    expect(names.values).toBeDefined();
    expect(names.keys).toBeDefined();
    expect(names.entries).toBeDefined();
    expect(names.whathow).toBeUndefined();
  })

});
