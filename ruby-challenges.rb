# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']
# # create def method with new_array. we will add in array and letter as arguments
# def new_array (array, letter)
#     # we can use .select to iterate over the elements of the array, passing |value| as a parameter
#     array.select do |value|
#         # we can include .downcase to our value to catch capitalization. .include with the letter argument will return the desired new array 
#         value.downcase.include?(letter)
#     end
# end

# p new_array(beverages_array, letter_o)
# p new_array(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# # Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# def all_hash_values (hash)
#     # in our return, .values will display all of the values in the hash. .flatten will combine all of the arrays into a single array. .sort will put the elements of the array in alphebetical order
#     hash.values.flatten.sort
# end

# p all_hash_values(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# creat Bike class
class Bike 
    # use attr_accessor to update attributes
    attr_accessor :model, :wheels, :current_speed
    # create def/end and initialize method and use model as argument
    def initialize(model)
        @model = model
        # wheels and current_speed are default values
        @wheels = 2
        @current_speed = 0
    end
    # create bike_info method
    def bike_info
        # use string interpolation to return a sentence with all the data from the bike object 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    # add in pedal_faster method taking speed as an argument
    def pedal_faster(speed)
        # create logic that allows increase in speed
        @current_speed = @current_speed + speed
        "The #{@model} is going #{@current_speed} mph."
    end
    # add in brake method taking in stop as argument
    def brake(stop)
        # create logic that allows decrease in speed
        @current_speed = @current_speed - stop
        # use conditional to determine slowed vs stopped
        if @current_speed <= 0
            # since there can be no negative speeds, set @current_speed equal to zero
            @current_speed = 0
            "You have stopped."
        elsif @current_speed > 0
            "Your speed has slowed to #{@current_speed} mph."
        end
    end
end


trek = Bike.new('Trek')

p trek.bike_info
p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.brake(5)
p trek.brake(25)

# "The Trek bike has 2 wheels and is going 0 mph."
# "The Trek is going 10 mph."
# "The Trek is going 28 mph."
# "Your speed has slowed to 23 mph."
# "You have stopped."