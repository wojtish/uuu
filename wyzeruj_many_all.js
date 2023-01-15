// wyzeruj_many_all.js

var bib = lib().entries();
var l = bib.lenght;


if(entry().field("procenty_many_all") < 50){
entry().set("wyzeruj","📗");
}

if(entry().field("procenty_many_all") < 90 && entry().field("procenty_many_all") > 50){
entry().set("wyzeruj","📙");
};


if(entry().field("procenty_many_all") > 89){
entry().set("wyzeruj","📕");
}
