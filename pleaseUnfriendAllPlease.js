// Friends: unfriend all from Facebook

// 1. Go to https://www.facebook.com/<your_fb_id>/friends
// 2. Scroll all the way down until the last friend is shown in the thumbnail
// 2. Paste the script into the console prompt (F12 to open the Developer tools)
// 3. Type pleaseUnfriendAllPlease() and hit return

var pleaseUnfriendAllPlease = function () {

    var done = [];

    var clickElement = function(elem) {
        elem.style.border = "thick solid red";
        elem.click();
    }
    
    var unfriendFriend = function(idx) {
        // unfriend
        [...document.querySelectorAll('a[role="menuitem"][ajaxify*="removefriendconfirm"]')].forEach( (a) => {      
            if (done.includes(a.attributes["ajaxify"].value) === false) {
                done.push(a.attributes["ajaxify"].value);
                clickElement(a);
                console.log('unfriended...');
            }              
        });
        setTimeout(unfriend, 2000);
    }

    var unfriend = function() {
    
        // button
        var elem = [...document.querySelectorAll('ul[class~="uiList"] a[role="button"][class~="friendButton"]')][0];
        if (elem) {
            if (done.includes(elem.attributes["data-profileid"].value) === false) {
                done.push(elem.attributes["data-profileid"].value);
                clickElement(elem);
                
            } else {
                elem.parentNode.removeChild(elem);
            }
            setTimeout(unfriendFriend, 500);
        } else {
            clearTimeout();
            console.log('DONE. Now enroll for a potter workshop and make friends there.');
        }  
    };  
  
    unfriend();
}
