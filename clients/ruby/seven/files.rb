def file_normal file_name

   file = File.open(file_name, 'r')
   content = file.read
   puts content
   
end

def file_block file_name

    File.open(file_name, 'r'){ |f| puts f.read }
    
end

file_normal "random.rb"
file_block "random.rb"