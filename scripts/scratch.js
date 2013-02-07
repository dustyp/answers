var id_counter = 1;
//Backbone.sync = function(method, model) {
//  console.log('Ive been passed ' + method + ' with ' + JSON.stringify(model));
//  if(method === 'create'){ model.set('id', id_counter++); }
//};


Book = Backbone.Model.extend({
    urlRoot: '/v1/books',
    defaults: {
        name: '',
        code: ''
    },
    initialize: function(){
        this.on("change:name", function(model){
            var name = model.get("name");
            console.log("Changed name to " + name + " you stinky asshole");
        })
    }
});


book = new Book;

book.set({name: 'a new book', 'code': '1000'});

book.save({success: function(book){
    console.log(book);
}});

var BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'poopClass',
    id: 'poops'
});

var bookView = new BookView;
console.log(bookView);

var storeVar = localStorage.getItem("store-name");


var Books = Backbone.Collection.extend({
    model: Book,
//    localStorage: new Store("store-name")
    url: '/v1/books'
});

var books = new Books();
//books.on("add", function(book){
//    console.log("You are now adding book " + book.get("name") + " with id : " + book.get("id"));
//});
//books.on("change:name", function(book){
//    console.log("I changed my mind that books title is now " + book.get("name"));
//})
//
//console.log(books.length);
//var myBook = new Book({id: 1, name: "poopppppt"});
//books.create({name: 'Book Title', code: '7',id:2});
//books.add(myBook);
//console.log(books.length);
//myBook.set("name", "THe Great Thanksgiving Poop");
//
//console.log(books.get(2) == myBook);

books.fetch();



var ourObject = {};

_.extend(ourObject, Backbone.Events);

function dancing(msg) { console.log("I am dancing with " + msg);}

function farty(msg) {console.log("pfffffffft");}

ourObject.on("dance:tap", dancing);
ourObject.on("dance:ballet", dancing);
ourObject.on("dance:ballet", farty);

ourObject.trigger("dance:tap", "tap foos");
ourObject.trigger("dance:ballet", "ballet foos");

ourObject.off("dance:ballet",dancing);

ourObject.trigger("dance:tap", "tap foos");
ourObject.trigger("dance:ballet", "ballet foos");


var BookRouter = Backbone.Router.extend({
    routes : {
        "about" : "showAbout",

        "books" : "list123",

        "books/:id" : "show"
    },

    showAbout : function(){
        console.log("fuck you");
        this.navigate("books", true)
    },

    list123: function(){
        console.log("I am in the list function");
        console.log("You are going to look at all books");
        books.each(function(book){
            console.log(book.get("name"));
        });


    },

    show: function(id){
        console.log("You are looking for book #" + id);
    }
});

var bookRouter = new BookRouter();

Backbone.history.start();



var Panel = function(options){
    console.log("panel initialized");
    this.foo = 'bar';
    Backbone.View.apply(this,[options]);
};

_.extend(Panel.prototype, Backbone.View.prototype, {
    sayHi: function(){
        console.log("Hello from panel");
    }
} );

Panel.extend = Backbone.View.extend;

var AdvancedPanel = Panel.extend({
    initialize: function(options){
        console.log("advanced panel initialized");
        console.log(this.foo);
    }
});

var advancedPanel = new AdvancedPanel();
advancedPanel.sayHi();