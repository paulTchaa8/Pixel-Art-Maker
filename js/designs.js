// Select color input
var colorInput = $('#colorPicker'); 
// Select size input
var hauteur, largeur;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(e){
				// to avoid being redirected to another page..
		e.preventDefault();	
			    // get the values for grid size 
		hauteur = $('#inputHeight').val();
		largeur = $('#inputWeight').val();
				// then, call the makeGrid() to create and apply colors to the squares
		makeGrid(hauteur, largeur);
});

function makeGrid(hauteur, largeur) {
		
}	// end makeGrid()