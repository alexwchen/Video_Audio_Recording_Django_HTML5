$(document).ready(function(){

	// handle first appearence of the selection tab
	$('#default_tab').addClass('graph_tabs_top_menu_options_selected');	
	$('.graph_content').css('display','none');
	$('#Study_Tab').css('display','block');

});


/*******************************************************
**			Hover Effects
**				Top Menu
**				Study List
**
********************************************************/

// Vocabulary - Study Section
$('.vocabulary_add_info_button').mouseenter(function () {
	$(this).css('background-color', '#fcae14');
});
$('.vocabulary_add_info_button').mouseleave(function () {
	$(this).css('background-color', 'white');
});


/*******************************************************
**			Graph Tabs 
**				Tabs Selection
********************************************************/
$('.graph_tabs_top_menu_options').click(function () {

	// dealing tabs switching
	var str = $(this).text().split(" ");
	var div_name = str[2]+'_Tab';
	$('.graph_content').css('display','none');
	$('#'+div_name).css('display','block');

	// dealing with menu option selection effects
	$(this).closest('.graph_tabs_top_menu').children('.graph_tabs_top_menu_options_selected').addClass('graph_tabs_top_menu_options');
	$(this).closest('.graph_tabs_top_menu').children('.graph_tabs_top_menu_options_selected').removeClass('graph_tabs_top_menu_options_selected');
	$(this).addClass('graph_tabs_top_menu_options_selected');
	$(this).removeClass('graph_tabs_top_menu_options');

	$('#training_garbage').children('embed').each(function () {
		$(this).remove();
	});

	$('#training_ans_garbage_collection').children('embed').each(function () {
		$(this).remove();
	});
});


