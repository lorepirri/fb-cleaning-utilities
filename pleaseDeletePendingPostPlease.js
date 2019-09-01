// Group administrator: remove all the pending posts

// 1. Go to https://www.facebook.com/groups/<your group id or name here>/pending/
// 2. Scroll all the way down until the last post appears (no more loading...)
// 2. Paste the script into the console prompt (F12 to open the Developer tools)
// 3. Type pleaseDeletePendingPostPlease() and hit return

var pleaseDeletePendingPostPlease = function () {

  var clickElement = function(elem) {
      elem.style.border = "thick solid red";
      elem.click();
  }
  
  var deletePendingPost = function(idx) {
      [...document.querySelectorAll('button[class~="layerConfirm"][type="submit"]')].forEach( (a) => { 
          if (a.innerHTML === "Delete") { 
              clickElement(a);
          }
      });
      setTimeout(removePendingPost, 5000, idx);
  }

  var removePendingPost = function() {
  
      var elem = [...document.querySelectorAll('a[role="button"][ajaxify*="/ajax/groups/mall/delete"]')][0];
      if (elem) {
          clickElement(elem);
          setTimeout(deletePendingPost, 2000);
      } else {
          clearTimeout();
          console.log('DONE. Now go out in the sun, deleting posts is slow and tiring, no human task.');
      }  
  };  

  removePendingPost();
}
