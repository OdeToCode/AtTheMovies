describe("new string features", function(){ 
	
	it("offer easy finds", function(){
		
		let name = "porter";
		
		expect(name.startsWith("port")).toBe(true);
		expect(name.endsWith("er")).toBe(true);
		expect(name.includes("ort")).toBe(true);
		
	})
	
	it("is iterable", function() {
		
		let name = "porter";
		
		for(let character of name) {
			expect(name.includes(character)).toBe(true);			
		}
		
	});
	
});