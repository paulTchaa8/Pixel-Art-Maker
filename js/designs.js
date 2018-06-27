// Select color input
let colorInput = $('#colorPicker'); 
// Select size input
let hauteur = $('#inputHeight'), largeur = $('#inputWeight');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(e){
				// to avoid being redirected to another page..
		e.preventDefault();	
			    // Here we get the grid size 
		let Hauteur = hauteur.val();
		let Largeur = largeur.val();
		
				// then, call the makeGrid() to create and apply colors to the squares
		makeGrid(Hauteur, Largeur);
});

function makeGrid(Hauteur, Largeur) {
	
// Let's remove the previous grid lines and its descendants to show the new grid..
		$('tr').remove(); 
		
		let	table = $('#pixelCanvas');
// Now we display the new grid, with a for loop.. 		
		for(let h=0; h<Hauteur; h++)
		{
				// we insert a new line - a 'tr' element here..
			table.append('<tr></tr>');
				// a nested for loop for the cells 
			for(let w=0; w<Largeur; w++)
			{
				// same, new cells are added in the LAST 'tr' element - the 'td' elements..
			$('tr:last').append('<td></td>');
			}
		}

	table.on('click', 'td', function(){
// We use the << event Delegation >>, to apply the click event to each cell 'td' on the 'table'
// Apply or Remove the color to the chosen cell - the <td> element..
		let couleur = colorInput.val();
		
		if($(this).attr('style'))
		{	
				// the style for the color already existing, remove this atrib to get out the color..
			$(this).removeAttr('style');
			
		}else{
				// the square has no style attrib yet, let it get the style attrib with the color 
			$(this).attr('style', 'background-color:'+couleur);
		}
	});

}	// end makeGrid()