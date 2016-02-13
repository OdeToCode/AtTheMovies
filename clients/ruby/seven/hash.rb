def hash_to_array 

    hash = { :a => [1,2,3], :b => [4,5]}
    
    a1 = hash.map { |k,v| v }
    puts a1
    
    a2 = hash.collect { |k,v| v }
    puts a2
    
    puts hash.values
        
end

def array_to_hash

    array = ["a", 1, "b", 2, "c", 3]
    hash = Hash[*array]
    
    puts hash
    puts hash["c"]
    
    hash.each { |k,v| puts "#{k}:#{v}" }

end

def print_four
    array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    var group = 0
    
    array.each { |v| 
        
    }
    
    
end

#hash_to_array
#array_to_hash
print_four