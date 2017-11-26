/**
 * 
 */
$(function(){
	  jQuery.ajax({
	    url: "cities.properties"
	  }).done(function(data){
	    var options = data.split(/\n/);
	    $('select[name="env"]').html('');	    
	    for (i=0; i<options.length; i++) {	     
	      var optionVal = options[i].split('=').pop().replace(';', "");
	      $('select[name="env"]').append('<option value="'+ optionVal +'">'+ optionVal +'</option>');
	    }
	  })

	});