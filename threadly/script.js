var main = function(){
$('form').submit(function(event){
	var value = $(event.target).find('input').val();
	if(value != ""){
		var html=$('<li>').text(value);
		html.prependTo('#comments');
		$(event.target).find('input').val("") ;
	}
	return false;

});
}

$(document).ready(main)