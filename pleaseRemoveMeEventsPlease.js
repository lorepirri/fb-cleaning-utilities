// 1. Go to: https://www.facebook.com/events/calendar/past/
// 2. Scroll down to have a reasonable number of items to delete (~500 is good)
// 3. Paste the script into the console prompt (F12 to open the Developer tools)
// 4. Type pleaseRemoveMeEventsPlease() and hit return

var pleaseRemoveMeEventsPlease = function () {

    var doActions = [];

    var removeMe = function(idx) {
    
        if (idx < doActions.length) {
          doActions[idx].click();
          console.log('task:', idx+1, 'of', doActions.length);
          setTimeout(removeMe, 500, idx+1);      
        } else {
          clearTimeout();
          console.log('DONE. Stop pretending to be going to every event ever.');
        }  
  };

  var idx=0; 
  
  [...document.querySelectorAll('div[class="_ohf rfloat"] > div')].forEach( (a) => { doActions[idx++] = a; });

  removeMe(0);
}
