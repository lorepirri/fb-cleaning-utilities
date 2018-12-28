// Messenger: remove all the messages

// 1. Go to https://www.messenger.com
// 2. Scroll down in the left column until the last chat
// 2. Paste the script into the console prompt (F12 to open the Developer tools)
// 3. Type pleaseRemoveDiscussionPlease() and hit return

var pleaseRemoveDiscussionPlease = function () {

    var clickElement = function(elem) {
        elem.style.border = "thick solid red";
        elem.click();
    }

    var confirmDeleteDiscussion = function(idx) {
        [...document.querySelectorAll('div[role="dialog"] button')].forEach( (a) => { 
            if (a.innerHTML === "Delete") {
                clickElement(a);
            }
        });
        setTimeout(removeDiscussion, 5000, idx);
    }
    
    var deleteDiscussion = function(idx) {
        [...document.querySelectorAll('li[role="presentation"] > a[role="menuitem"] > span > span')].forEach( (a) => { 
            if (a.innerHTML === "Delete") { 
                clickElement(a);
            }
        });
        setTimeout(confirmDeleteDiscussion, 2000, idx);
    }

    var removeDiscussion = function() {
    
        var elem = [...document.querySelectorAll('div[aria-label="Actions"] > div > div[aria-label="Conversation actions"]')][0];
        if (elem) {
            clickElement(elem);
            setTimeout(deleteDiscussion, 600);
        } else {
            clearTimeout();
            console.log('DONE. Now drop a message to somebody on Signal and have a walk together.');
        }  
    };  
  
    removeDiscussion();
}
