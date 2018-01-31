var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '465840',
  key: '03546d3191f70ee465f0',
  secret: '086e9372230faec75a79',
  cluster: 'ap2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});