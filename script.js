var sources = [
  {"author": "Sonia Gandhi",
   "quote": 'Together we can face any challenges as deep as the ocean and as high as the sky.'
  },
  {"author": "Nina Arianda",
   "quote": 'My favorite place to vacation is anyplace by the ocean.'
  },
  {"author": "Shawn Mendes",
   "quote": 'There is nothing that scares me more than, like, being in the ocean by myself.'
  }
]



$('#trigger').click(function(){
  var dirty = false;
  $("#notice").html("");
  var inputted =  $("#user_input").val().trim();
  inputted= inputted.replace(/  +/g, ' ');

  sources.forEach(function(source){
     console.log(source.quote);
    //  if (source.quote.indexOf(inputted) > -1) {
     if (inputted.indexOf(source.quote) > -1) {
       dirty = true;
       $("#notice").append("<br>You have stolen from "+source.author);
     }
  })
  if (!dirty){
      console.log("not dirty");
     $("#notice").append("<br>Wonderful, original prose !");
  }
})
