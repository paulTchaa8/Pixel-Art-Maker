// Select color input
var colorInput = $('#colorPicker'); 
// Select size input
var hauteur, largeur;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(e){
				// to avoid being redirected to another page..
		e.preventDefault();	
			    // Here we get the grid size 
		hauteur = $('#inputHeight').val();
		largeur = $('#inputWeight').val();
				// then, call the makeGrid() to create and apply colors to the squares
		makeGrid(hauteur, largeur);
});

function makeGrid(hauteur, largeur) {
	
// Let's remove the previous grid lines and its descendants to show the new grid..
		$('tr').remove(); 
		
		var	table = $('#pixelCanvas');
// Now we display the new grid, with a for loop.. 		
		for(var h=0; h<hauteur; h++)
		{
				// we insert a new line - a 'tr' element here..
			table.append('<tr></tr>');
				// a nested for loop for the cells 
			for(var w=0; w<largeur; w++)
			{
				// same, new cells are added in the LAST 'tr' element - the 'td' elements..
			$('tr:last').append('<td></td>');
			}
		}


}	// end makeGrid()