function polling_convo(){
	$.get("/retrieve_convo/", function(data)
    {
		//var lastconvo = $(this).parent().parent().find('.last_convo_box').children('.last_convo_content').text();
		var lastconvo = $('.last_convo_content').text().replace(/^\s*|\s*$/g,'');
		var newdata = data.replace(/^\s*|\s*$/g,'');
		// if they are the same, do nothing
		if (lastconvo!=newdata)
		{
			var firefox = "<embed height='0px'  src='http://translate.google.com/translate_tts?tl=en&q="+newdata+"' type='audio/mpeg'></embed>";
			var chorme = "<embed height='0px'  class='shit' src='http://translate.google.com/translate_tts?tl=en&q="+newdata+"' ></embed>";
			$(firefox).appendTo('#garbage_collection');
			$(chorme).appendTo('#garbage_collection');
			$('.last_convo_content').text(data);	
		}
    });
}

setInterval(polling_convo,1000);

$('.record_button').click(function () {
	alert('hi');
});
