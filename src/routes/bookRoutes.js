var express = require('express');

var bookRouter = express.Router();
var sql = require('mssql');


var router = function(nav){
var books = 
[{
    title: 'IT',
    genre: 'Horror',
    author: 'Stephen King',
    read: false
},
{
    title: 'C# IN DEPTH',
    genre: 'Programming',
    author: 'Manning',
    read: false
},
{
    title: 'Creating Mobile Apps with Xamarin.Forms',
    genre: 'Programming',
    author: 'Charles Petzold',
    read: false
}
];
bookRouter.route('/')
.get(function (req, res){
    var request = new sql.Request();
    request.query('select * from books', 
    function(err, recordset){
        console.log(recordset);
    })
    res.render('booksListView', 
        {
        title: 'Books' ,
        nav: nav,
        books: books
    });        
    });


bookRouter.route('/:id')
.get(function (req, res){
    var id = req.params.id
      res.render('bookView', 
        {
        title: 'Books' ,
        nav: nav,
         book: books[id]
       });
        
});
    return bookRouter;
}

module.exports = router;