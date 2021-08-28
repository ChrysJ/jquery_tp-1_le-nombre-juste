$(document).ready(function () {
    var minNumber = 1; // le minimum
    var maxNumber = 100; // le maximum
    var randomNumber = Math.floor(Math.random() * (maxNumber) + minNumber);// la fonction magique
    var clicks = 0; 
    console.log(randomNumber)
    $('#btn-style').click(function () {
        
        clicks++;
        console.log(clicks)
        var inputnb = parseInt($('#ip-number').val());
        if (inputnb > randomNumber) {
            $('#prg-empty').text('C\'est moins !');
        } else if (inputnb < randomNumber) {
            $('#prg-empty').text('C\'est plus !');
        } else if (inputnb == randomNumber) {
            $('#prg-click-number-times').text('Bravo à vous vous avez trouvé en : ' + clicks + ' essai\(s\) !');
            alert('C\'est gagner bravo à vous !! Nombre d\'essaie : ' + clicks);
            $('#btn-reset').show()
        }
        
        $('#btn-reset').click(function(){
            location.reload(true);
    });
    });
});