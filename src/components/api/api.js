import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToCountdownTimer(cb) {
  socket.on('countdown', countdownCounter => cb(null, countdownCounter));
  socket.emit('subscribeToCountdownTimer');
}

function subscribeToQuestions(cb) {
  socket.on('question', questionItself => cb(null, questionItself));
  socket.emit('subscribeToQuestions');
}

export { subscribeToTimer, subscribeToCountdownTimer, subscribeToQuestions };
