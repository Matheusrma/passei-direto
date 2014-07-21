var db = connect("localhost:27017/passei-direto");

db.library.remove();

db.library.insert({
  title:"Testando1",
  author:"Testando2",
  year:"2012"
});

db.library.insert({
  title:"Testando1",
  author:"Testando2",
  year:"2012"
});

db.library.insert({
  title:"Testando2",
  author:"Testando2",
  year:"2007"
});

var cursor = db.library.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}