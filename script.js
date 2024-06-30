$(document).ready(function() {
    $('#add-question').click(function() {
        // Clone the template
        var newQuestion = $('#question-template').clone();

        // Optionally, you can remove the id from the clone
        newQuestion.removeAttr('id');

        // Append the cloned question to the form container
        $('#question-template').parent().append(newQuestion).append('<br>');
    });

    $('#add-option').click(function() {
        //Clone the template
        var newOption = $('#option-template').clone();

        //removing id
        newOption.removeAttr('id');

        //remove input field
        newOption.find('input').val(''); 

        //Append the cloned option to new options space
        $('#new-options').append(newOption).append('<br>');

    });

    $('#options-container').on('click', '.question-box_option-block_option-close', function() {
        $(this).closest('.question-box_option-block').next('br').remove(); // Remove the <br> after the option
        $(this).closest('.question-box_option-block').remove(); // Remove the option
    });

    
});
