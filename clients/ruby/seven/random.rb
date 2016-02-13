number = rand(100)
guess = -1

while guess != number do
    puts "input your guess"
    guess = gets.to_i

    if guess < number 
	puts "too low"
    elsif guess > number 
	puts "too high"
    else 
	puts "correct!"
    end
end
