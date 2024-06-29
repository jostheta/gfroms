$(document).ready(function() {
    $('#add-question').click(function() {
        // Clone the template
        var newQuestion = $('#question-template').clone();

        // Optionally, you can remove the id from the clone
        newQuestion.removeAttr('id');

        // Append the cloned question to the form container
        $('#question-template').parent().append(newQuestion);
    });
});
