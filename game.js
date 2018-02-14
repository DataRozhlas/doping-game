// namalovat zakladni zobrazeni
var menu = '<div id="menu">'
Object.keys(latky).forEach(function(l) {
    menu += '<div alt="' + l + '" class="fet"><img src="img/' + latky[l].img + '.jpg" class="ico"><br>' + l + '</div>'
})
menu += '</div>'
$('#hra').append(menu)
$('#hra').append('<div id="sport"><img class="sportimg" src="img/clovek.jpg"></div>')
$('#details').html('<p class="servisni">Vyber si doping</p>')

function kill() {
    $('#sport').children().attr('src', 'img/smrt.jpg')
    $('#details').html('<p class="servisni">Ufetoval jsi se :(</p>')
    

};

$('.fet').on('click', function(e) {
    $('.servisni').remove();
    var fet = $(this).attr("alt");

    console.log()

    $('.sel').removeClass('sel')
    $(this).addClass('sel')


    var detLength = $('#details').children().length;
    
    var detail = '<div class="detail" alt="' + fet + '"><b>' + fet + '</b><br>'

    Object.keys(latky[fet]).forEach(function(key) {
        detail += key + ': ' + latky[fet][key] + '<br>'
    })

    var imgs = ''
    latky[fet].img_sporty.split(', ').forEach(function(key) {
        imgs += '<img class="sportimg" src="img/' + key + '.jpg">'
    });

    detail += '</div>'
    $('#details').html(detail)
    $('#sport').html(imgs)
})