$(document).ready(function(){
	// function (){
	// 	$("button").click(function(){
	// 			var item=$("#li").val();
	// 			var input= $("input[id=li]").val();
	// 			$('ul').append("<li>"+ item +"</li");
				
	// 		});	
	$('#createList').click(function(){
    $('.Current').append($('<li>', {
         text: $("#input").val()
    }));
});

	
$('ul').on('click', 'li',function(){
	$(this).hide("show");
 });



})


