//JQUERY PLUGINS

// add new ravechart
$( document ).ready(function() {

 $('#ravechart-category').change(function(event) {
     $('#selected-category').html($('#ravechart-category option:selected').text());       
});

});//END JQUERY PLUGINS