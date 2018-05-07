function makeGrid(widthval,heightval){
	let tr="";
	let td="";
	for (var i = 0; i < widthval; i++) {
		td+="<td></td>";
	}
	for (var a = 0; a < heightval; a++) {
		tr+="<tr>"+td+"</tr>";
	}
	return tr;
}

$('.submit').click(function(b){
	$('#pixelCanvas').empty();
    b.preventDefault();
    let width = $('#inputWeight').val();
    let height = $('#inputHeight').val();
    let form = makeGrid(width,height);
    $('#pixelCanvas').append(form);
});

$('#pixelCanvas').on('click','td',function(){
    let color = $('#colorPicker').val();
    $(this).css('background-color',color);
});
