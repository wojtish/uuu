// zapisz_notatki.js

var a = entry().field("notatki");
var b = entry().field("notatki1");
var c = entry().field("notatki2");

var toSet = '\n'+'\n'+a+b+c;

entry().set("notatki",'')
entry().set("notatki2",toSet);
