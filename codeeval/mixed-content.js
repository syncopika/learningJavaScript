//only partial solution 62.5 

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line;
var a1 = a.split(',');
var b = [];//store words
var c = [];//store numbers
if(a.match(/[a-zA-Z]/g) === null || a.match(/[0-9]/g) === null){
  console.log(a);
}
else{
for(i=0;i<a1.length;i++){
  if(a1[i].match(/[0-9]/g) === null){
    b.push(a1[i]);
  }
  else{
    c.push(a1[i]);
  }
}
var d = '';
b.map(function(word){if(b.indexOf(word) === b.length-1){return d+=word;}else{return d += word + ','}});
var e = '';
c.map(function(number){if(c.indexOf(number) === c.length-1){return e+=number;}else{return e += number + ','}});
console.log(d + '|' + e);
}
    }
});
