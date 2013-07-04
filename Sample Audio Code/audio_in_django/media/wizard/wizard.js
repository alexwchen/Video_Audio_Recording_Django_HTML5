
$('.input_box').keypress(function(e) {

	// detect enter
	if(e.which == 13) {
		
		// display in display box
		var convo = $(this).val();
		var new_div = 	"<div class='text_containter'>"+
							convo +
						"</div>";
        $('.display_box').prepend(new_div);		
		$(this).val('');
				
		// send to server store in database		
		// CSRF code, used for POST
		jQuery(document).ajaxSend(function(event, xhr, settings) {
		    function getCookie(name) {
		        var cookieValue = null;
		        if (document.cookie && document.cookie != '') {
		            var cookies = document.cookie.split(';');
		            for (var i = 0; i < cookies.length; i++) {
		                var cookie = jQuery.trim(cookies[i]);
		                // Does this cookie string begin with the name we want?
		                if (cookie.substring(0, name.length + 1) == (name + '=')) {
		                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                    break;
		                }
		            }
		        }
		        return cookieValue;
		    }
		    function sameOrigin(url) {
		        // url could be relative or scheme relative or absolute
		        var host = document.location.host; // host + port
		        var protocol = document.location.protocol;
		        var sr_origin = '//' + host;
		        var origin = protocol + sr_origin;
		        // Allow absolute or scheme relative URLs to same origin
		        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
		            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
		            // or any other URL that isn't scheme relative or absolute i.e relative.
		            !(/^(\/\/|http:|https:).*/.test(url));
		    }
		    function safeMethod(method) {
		        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
		    }

		    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
		        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
		    }
		});

		// add '_' to make on string
		var word = convo.replace(/^\s*|\s*$/g,'').replace(/\s/g,'_');

		// Send a "POST" to server
		$.post("/store_convo/", {'convo':word},function(data){
			if (data=="success"){
				alert('yes');
			}
			else{
				alert('fail');
			}			
		});
		
		
    } 
});
