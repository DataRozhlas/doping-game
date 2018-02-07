// namalovat zakladni zobrazeni
var menu = '<div id="menu">'
Object.keys(latky).forEach(function(l) {
    menu += '<div alt="' + l + '" class="fet"><img src="img/ico.png" class="ico"></div>'
})
menu += '</div>'
$('#hra').append(menu)
$('#hra').append('<div id="sport"><img class="sportimg" src="img/clovek.gif"></div>')
$('#details').html('<p class="servisni">Vyber si doping</p>')

function kill() {
    $('#sport').children().attr('src', 'img/smrt.gif')
    $('#details').html('<p class="servisni">Ufetoval jsi se :(</p>')
    $('.sel').removeClass('sel')

};

$('.fet').on('click', function(e) {
    $('.servisni').remove();
    var fet = $(this).attr("alt");
    //pokud je vybrana, tak odvybrat
   if ($(this).hasClass('sel')) { //prepina stav vybrani
        $(this).removeClass('sel')
        $('div[class="detail"][alt="' + fet + '"]').remove(); //vyhodi popisek

        var detLength = $('#details').children().length;
        if (detLength == 0) {
            $('#details').html('<p class="servisni">Vyber si doping</p>')
            $('#sport').html('<img class="sportimg" src="img/clovek.gif">')
        };
        return;
    } else {
        $(this).addClass('sel')
    };
    var detLength = $('#details').children().length;
    if (detLength == 3) {
        kill();
        return;
    };
    var detail = '<div class="detail" alt="' + fet + '"><b>' + fet + '</b><br>'

    Object.keys(latky[fet]).forEach(function(key) {
        detail += key + ': ' + latky[fet][key] + '<br>'
    })

    detail += '</div>'
    $('#details').append(detail)
    $('#sport').children().attr('src', 'img/cyklista.gif')
})