var usernames = ["mitchelllillie", "patharryux", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano", "jasonsiren", "jtz1983", "erikphansen", "tybrenner"];
//Allows for each JSON data to be used, starting with usernames array
usernames.forEach(function(name) {
    $.get('http:/teamtreehouse.com/'+name+'.json').
        done(importUser);
});

//Loads Data of Izel that contains most (if not all) badges
function loadMaster() {
  $.ajax(
  {
  	url: "http://teamtreehouse.com/izelnakri.json",
  	dataType: "json",
  	async: false,
  	success: function(data)
  	{
  		object = data;
  	}
  });
  for (var i = 0; i < 322; i ++) {
    arrayOfAll.push(object.badges[i].icon_url);
  }
  return arrayOfAll;
}

//Loads page with master data (can be turned off to increase loading speed):
window.onload = function() {
  console.log("loaded!");
  loadMaster();
};