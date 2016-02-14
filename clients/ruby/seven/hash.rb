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
    group = []
    
    array.each { |v| 
        group.push v
        if group.length > 3
            group.each { |n|
                puts n
            }
            puts '**'
            group = []
        end
    }
end

class Tree

    attr_accessor :name, :children

    def initialize (entry) 
       @children = []       
       @name = entry.keys[0]
                   
        entry[@name].each_pair do |k,v|
            @children.push Tree.new Hash[k, v]
        end                   
                                            
    end

    def visit_all(&block)       
        visit &block
        children.each { |n| n.visit_all &block }        
    end
    
    def visit(&block)
        block.call self
    end

end

tree = Tree.new({'grandpa' => { 
                    'dad' => 
                       {'child 1' => {}, 'child 2' => {} }, 
                    'uncle' => 
                       {'child 3' => {}, 'child 4' => {} } } })

tree.visit_all {
    |node|
    puts node.name
}

#hash_to_array
#array_to_hash
#print_four
tree