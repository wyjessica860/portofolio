document.addEventListener('DOMContentLoaded', function() {
    var funcs = {
        getAttr: function(ele, attr) {
            console.log(ele);
            var result = (ele.getAttribute && ele.getAttribute(attr)); 
            if( !result ) {
                var attrs = ele.attributes;
                var length = attrs.length;
                for(var i = 0; i < length; i++)
                  
                    if(attrs[i].nodeName === attr)
                        result = attrs[i].nodeValue;
            }
                  console.log(attrs);
  
            return result;
        },
    
    };
    for(var i = 0; i<7; i++) {
      var paws = document.getElementsByClassName('paws hidden');
      if (paws.length == 0 ) {
        break;
      }
             setTimeout(function() {
  
              for(var paw in paws) {
                    console.log(paw);
                    if(paws.hasOwnProperty(paw)) {
                        var time = funcs.getAttr(paws[paw], 'timeout') - 1;
                        paws[paw].setAttribute("timeout", time); 
                        if (time == 0) {
                           paws[paw].classList.remove("hidden");
                        }
                    }
              }
                       }, 400 * i);
  
    }
  }, false);