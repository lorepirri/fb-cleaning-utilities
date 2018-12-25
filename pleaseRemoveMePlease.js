// 1. Go to: https://www.facebook.com/lorepirri/allactivity
// 2. Select an entry from the left menu
// 3. Scroll down to have a reasonable number of items to delete (~500 is good)
// 4. Paste the script into the console prompt (F12 to open the Developer tools)
// 5. Type pleaseRemoveMePlease() and hit return

var actions = ["report.php?content_type","delete/confirm","action=remove_video_watch","action=unsubscribe_calendar","action=unlike","action=hide","action=remove_comment","action=unfan_fbpage","action=delete_save"];
var actionsToBeConfirmed = ["delete/confirm"];
var actionsToBeConfirmedWithRadiobox = ["report.php?content_type"];

var isToBe = function (value, allowed) { return allowed.some( (a) => { return value.indexOf(a) !== -1; } ); };

var isToBeRemoved = function (value) { return isToBe(value, actions); };

var isToBeConfirmed = function (value) { return isToBe(value, actionsToBeConfirmed); };

var isToBeConfirmedWithRadiobox = function (value) { return isToBe(value, actionsToBeConfirmedWithRadiobox); };

  
var pleaseRemoveMePlease = function () {

    var doActions = [];

	var confirmRemoveTagDone = function(idx) {
        [...document.querySelectorAll('a[id="nfx_dialog_done"]')].forEach( (a) => { a.style.border = "thick solid red"; a.click(); });
		setTimeout(removeMe, 7000, idx);
    }

	var confirmRemoveTag = function(idx) {
        [...document.querySelectorAll('a[id="NFXAction-UNTAG"]')].forEach( (a) => { a.style.border = "thick solid red"; a.click(); });
		setTimeout(confirmRemoveTagDone, 7000, idx);
    }
    
	var removeTagDone = function(idx) {
        [...document.querySelectorAll('button[class~="layerConfirm"]')].forEach( (a) => { a.style.border = "thick solid red"; a.click(); });
		setTimeout(confirmRemoveTag, 7000, idx);
    }

	var removeTag = function(idx) {
        [...document.querySelectorAll('input[value="annoying"]')].forEach( (a) => { a.style.border = "thick solid red"; a.click(); });
		setTimeout(removeTagDone, 4000, idx);
    }
    
	var deleteMe = function(idx) {
        [...document.querySelectorAll('button[class~="layerConfirm"]')].forEach( (a) => { a.style.border = "thick solid red"; a.click(); });
		setTimeout(removeMe, 7000, idx);
    }

    var removeMe = function(idx) {

        if (idx < doActions.length) {
            
            doActions[idx].click();

            console.log('task:', idx+1, 'of', doActions.length);

            if (isToBeConfirmed(doActions[idx].attributes["ajaxify"].value)) {
                setTimeout(deleteMe, 2000, idx+1);
            } else if (isToBeConfirmedWithRadiobox(doActions[idx].attributes["ajaxify"].value)) {
                setTimeout(removeTag, 2000, idx+1);
            } else {
                setTimeout(removeMe, 500, idx+1);
            }
        
        } else {
            clearTimeout();
            console.log('DONE. You did a favor to your past and present self. Go now play in the offline world, please.');
        }  
    };

    var idx=0; 

    [...document.querySelectorAll('a[rel="async-post"]')].forEach( (a) => { if (isToBeRemoved(a.attributes["ajaxify"].value) ) { doActions[idx++] = a; }});

    removeMe(0);
}
