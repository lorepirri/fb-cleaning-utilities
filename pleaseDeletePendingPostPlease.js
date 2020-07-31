// Group administrator: remove all the pending posts _updated 11/July/2020_

// 1. Go to https://www.facebook.com/groups/<your group id or name here>/pending/
// 2. Scroll all the way down until the last post appears (no more loading...)
// 2. Paste the script into the console prompt (F12 to open the Developer tools)
// 3. Type pleaseDeletePendingPostPlease() and hit return

// update 11/July/2020:
// - new FB layout

var new_decline_button_selector =
  'div[role="button"][aria-label="Decline"]:not([aria-disabled="true"])';
var decline_button_selector =
  'a[role="button"][ajaxify*="/ajax/groups/mall/delete"]';

var pleaseDeletePendingPostPlease = function () {
  var clickElement = function (elem) {
    elem.style.border = "thick solid red";
    elem.click();
  };

  var deletePendingPost = function (idx) {
    [
      ...document.querySelectorAll(
        'button[class~="layerConfirm"][type="submit"]'
      ),
    ].forEach((a) => {
      if (a.innerHTML === "Delete") {
        clickElement(a);
      }
    });
    setTimeout(removePendingPost, 5000, idx);
  };

  var doneRemovingPosts = function () {
    clearTimeout();
    console.log(
      "DONE. Now go out in the sun, deleting posts is slow and tiring, no human task."
    );
  };

  var removePendingPost = function () {
    var elem = [...document.querySelectorAll(decline_button_selector)][0];
    if (elem) {
      clickElement(elem);
      setTimeout(deletePendingPost, 2000);
    } else {
      doneRemovingPosts();
    }
  };

  var newRemovePendingPost = function () {
    var elem = [...document.querySelectorAll(new_decline_button_selector)][0];
    if (elem) {
      clickElement(elem);
      setTimeout(newRemovePendingPost, 2000);
    } else {
      doneRemovingPosts();
    }
  };

  var deletePost = [...document.querySelectorAll(decline_button_selector)][0];
  var newDeclineButton = [
    ...document.querySelectorAll(new_decline_button_selector),
  ][0];
  if (newDeclineButton) {
    newRemovePendingPost();
  } else if (deletePost) {
    removePendingPost();
  } else {
    console.log(
      "Well, I can't find the button. They might have changed the template :) go out anyway."
    );
  }
};
