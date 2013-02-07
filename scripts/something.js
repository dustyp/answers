
var HomeView = Jr.View.extend({
    render: function(){
        var template = Hogan.compile($("#question-template").html());
        this.$el.html(template.render({name:'How long after a miscarriage does it take for your HCG levels to return to normal?'}));
        return this;
    }
});

var AppRouter = Jr.Router.extend({
    routes: {
        'home': 'home'
    },

    home: function(){
        var homeView = new HomeView();
        this.renderView(homeView);
    }

});

var appRouter = new AppRouter();
Backbone.history.start();
Jr.Navigator.navigate('home',{
    trigger: true
});
