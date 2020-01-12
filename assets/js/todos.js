// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// Click on X to delete Todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
        $(this).parent().remove();
    })
})

// Check for enter keypress
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
        // grabs tasks to add
        var task = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + task + "</li>")
    }
})

$(".fa-expand").on("click", function(){
    $("input[type='text']").fadeToggle();
})