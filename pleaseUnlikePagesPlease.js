// unlike pages

// 1. Go to: https://www.facebook.com/pages/?category=liked
// 3. Scroll down to have a reasonable number of items to delete (~500 is good)
// 2. Paste the script into the console prompt (F12 to open the Developer tools)
// 3. Type pleaseUnlikePagesPlease() and hit return
// 4. Click on 'done'.

// update 31/July/2020:
// - new FB layout

var doActions = [];

var pleaseUnlikePagesPlease = function () {
    
    var unlikePage = function(idx) {

        if (idx < doActions.length) {
          doActions[idx].style.border = "thick solid red";
          doActions[idx].click();
          console.log('task:', idx+1, 'of', doActions.length);
          setTimeout(unlikePage, 1000, idx+1);
        } else {
          clearTimeout();
          console.log('DONE. Why did you want in the first place to be bombarded by their updates?');
        }  
    };

    var idx=0;
    
    [...document.querySelectorAll('button[type="button"]')].forEach( (a) => { if (a.innerHTML.includes("Liked")) { doActions[idx++] = a; } });
    
    unlikePage(0);
}
