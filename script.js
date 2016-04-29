$("document").ready(function(){
  
  var numArrayList =[];
  var strArrayList =[];
  var hist = {};
 
  
  
  
  $("#button1").click(function(event){
    event.preventDefault();
    
    var inputVal = $("#input").val();
    
    if (isNaN(inputVal))
      {
        strArrayList.push(inputVal); 
        $("#string").append(inputVal +" ");
       
        //debugger;
        
        var words = $.trim($("#input").val()).toLowerCase().split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/);
        //words.toLowerCase();
        strArrayList.join(words);
        console.log(strArrayList.length);
        console.log(words)
        $
        
         for(var i in  words)
         {
            if(words[i].length >1 )
            {
            /*
              hist[words[i]] 
              ? hist[words[i]] += 1 // ? means then
              : hist[words[i]] = 1; // : means else
              */
              
              if (hist[words[i]])
              {
                  hist[words[i]] = hist[words[i]] + 1;
              }
              else
              {
                  hist[words[i]] =1;           
              }
           }
        }
        //$("#tab3").data('<tr><td>' + hist + '</td><td>' + + '</td></tr>');      
        
        console.log(JSON.stringify(hist));
       
       
    
        
        $("#input").val('');
        
      
      }//closing if
    else
      {
        numArrayList.push(inputVal);
        $("#tab1").append('<tr><td>' + inputVal + '</td></tr>');
     
      var sum = 0;
      for (var i=0; i<numArrayList.length; i++)
      {
        sum += numArrayList[i] << 0;
      }
        $("#sum").html(sum);
        $("#count").html(numArrayList.length);
        $("#avg").html(sum/numArrayList.length);
        $("#input").val('');
      }//closing else
  });
});


 function resetButton()
   {
      //$("textarea").val('');
      $("form").reset();
    

    }




/*var wordcnt = function(id){
  var hist = {};
  var words= document.getElementById("#input").split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/);
  for(var i in  words)
    if(words[i].length >1 )
      hist[words[i]] ? hist[words[i]]+=1 : hist[words[i]]=1;
  return hist;
  
};

  });*/
  
  
   /* var words = $.trim($(inputVal)).split(" ");
       wordCount.push(words);
        console.log(wordCount);
         $("#string").append(words + " ");
        $("#span").html(wordCount.length);
          $("#tab3").append('<tr><td>' +  + '</td><td>' + + '</td></tr>');      
        //console .log(words);*/



/*function wordCount(words){
    return {
        charactersNoSpaces : words.replace(/\s+/g, '').length,
        characters         : words.length,
        words              : words.match(/\S+/g).length,
        lines              : words.split(/\r*\n/).length
    }
}
console.log(wordCount(words));*/
