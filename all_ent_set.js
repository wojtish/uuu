// all_ent_set.js

var bib = lib();
var entries = bib.entries();
var l = entries.length;

for (var j=0;j<l;j++){
entries[j].set("all_ent",l);
};

