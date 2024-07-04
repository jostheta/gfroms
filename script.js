$(document).ready(function() {
    $('#add-question').click(function() {
        // Clone the template
        var newQuestion = $('#question-template').clone();

        // Optionally, you can remove the id from the clone
        newQuestion.removeAttr('id');

        // Append the cloned question to the form container
        $('#question-template').parent().append(newQuestion).append('<br>');
    });

    //initializing an option count to keeo track of option number
    let optionCount = 1;

    $('#add-option').click(function() {
        //increment the option count
        optionCount++;

        //Clone the template
        var newOption = $('#option-template').clone();

        //removing id
        newOption.removeAttr('id');

        //add close button to the new option
        newOption.append('<button class = "question-box_option-block_option-close" id = "close-option"><img src = "./images/close.png"></button>');

        //remove input field
        newOption.find('input').val(''); 

        //set the incremented placeholder
        newOption.find('input').attr('placeholder', 'Option ' + optionCount); 


        //Append the cloned option to new options space
        $('#new-options').append(newOption).append('<br>');

    });

    $('#options-container').on('click', '.question-box_option-block_option-close', function() {
        $(this).closest('.question-box_option-block').next('br').remove(); // Remove the <br> after the option
        $(this).closest('.question-box_option-block').remove(); // Remove the option
    });


    //delete question
    $(document).on('click', '.delete-question', function() {
        $(this).closest('.question-box').next('br').remove(); // Remove the <br> after the question box
        $(this).closest('.question-box').remove(); // Remove the question box
    });

    
});
