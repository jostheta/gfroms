$(document).ready(function() {
    let questionCount = 0;

    $('#add-question').click(function() {
        questionCount++;
        
        // Clone the question template
        var newQuestion = $('#question-template').clone();
        newQuestion.removeAttr('id');
        newQuestion.find('.question-box_header_question').attr('placeholder', 'Question ' + questionCount);
        newQuestion.find('.question-box_option-block_option-text').attr('placeholder', 'Option 1');
        newQuestion.show(); // Ensure the cloned template is visible

        // Append the cloned question to the form container
        $('#question-template').parent().append(newQuestion).append('<br>');
    });

    $(document).on('click', '#add-option', function() {
        // Increment the option count
        let optionCount = $(this).closest('#options-container').find('.question-box_option-block').length + 1;

        // Clone the template
        var newOption = $('#option-template').clone();
        newOption.removeAttr('id');
        newOption.find('input').val(''); 
        newOption.find('input').attr('placeholder', 'Option ' + optionCount); 

        // Add close button to the new option if more than one option exists
        if (optionCount > 1) {
            newOption.append('<button class="question-box_option-block_option-close"><img src="./images/close.png" alt="close option"></button>');
        }

        // Append the cloned option to new options space
        $(this).closest('#options-container').find('#new-options').append(newOption).append('<br>');
    });

    $(document).on('click', '.question-box_option-block_option-close', function() {
        $(this).closest('.question-box_option-block').next('br').remove(); // Remove the <br> after the option
        $(this).closest('.question-box_option-block').remove(); // Remove the option
    });

    $(document).on('click', '.delete-question', function() {
        $(this).closest('.question-box').next('br').remove(); // Remove the <br> after the question box
        $(this).closest('.question-box').remove(); // Remove the question box
    });
});

function previewForm() {
    // Collect the form data
    var formTitle = $('#form-title').val();
    var formDesc = $('#form-desc').val();
    var questions = [];

    $('.question-box:visible').each(function() {
        var questionText = $(this).find('.question-box_header_question').val();
        var options = [];

        $(this).find('.question-box_option-block').each(function() {
            var optionText = $(this).find('.question-box_option-block_option-text').val();
            if (optionText) {
                options.push(optionText);
            }
        });

        questions.push({
            questionText: questionText,
            options: options
        });
    });

    // Store the form data in localStorage
    localStorage.setItem('formTitle', formTitle);
    localStorage.setItem('formDesc', formDesc);
    localStorage.setItem('questions', JSON.stringify(questions));

    // Open the preview page
    window.open('preview.html', '_blank');
}
