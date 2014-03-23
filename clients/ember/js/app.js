window.AtTheMovies = Ember.Application.create({
    LOG_TRANSITIONS: true
});

AtTheMovies.ApplicationController = Ember.Controller.extend({
    appName: "At The Movies (Ember)"
});

AtTheMovies.TextFieldComponent = Ember.TextField.extend({
    classNames: ["form-control"],
    type: "text"
});

AtTheMovies.NumberFieldComponent = Ember.TextField.extend({
    classNames: ["form-control"],
    type: "number"
});