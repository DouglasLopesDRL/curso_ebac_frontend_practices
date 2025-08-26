$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const inputTasks = $('#input-tasks').val();
        const newItem = $('<li></li>');
        $(`<p">${inputTasks}</p>`).appendTo(newItem);

        $(newItem).appendTo('ul');
        $('#input-tasks').val('');
    });

    $('#list-tasks').on("click","li", function(){
       // $(this).css("text-decoration", "line-through");
       $(this).toggleClass("crossed-out");
    });
});