//Comando para establecer la comunicación

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connection', () => {
    console.log('Cliente conectado');
});

socket.on('disconnect', () => {
    console.log('Cliente desconectado');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})