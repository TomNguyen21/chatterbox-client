var App = {

  $spinner: $('.spinner img'),

  username: 'yutoliiho',

  initialize: function () {
    App.username = window.location.search.substr(10);
    console.log(App.username) // anonymous

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages = data.results
      MessagesView.render(Messages)
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
