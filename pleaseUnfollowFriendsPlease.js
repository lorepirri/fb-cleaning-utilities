// 1. Click account settings in the top right corner of any Facebook page.
// 2. Select News Feed Preferences from the menu.
// 3. Click on Unfollow people and groups to hide their posts.
// 4. Select Friends from the top left dropdown menu.
// 5. Scroll down entirely until all of your friends are visible in the thumbnail.
// 6. Paste the script into the console prompt (F12 to open the Developer tools)
// 7. Type pleaseUnfollowFriendsPlease() and hit return
// 8. Click on 'done'.

var doActions = [];

var pleaseUnfollowFriendsPlease = function () {
    
    var unfollowFriend = function(idx) {

        if (idx < doActions.length) {
          doActions[idx].style.border = "thick solid red";
          doActions[idx].click();
          console.log('task:', idx+1, 'of', doActions.length);
          setTimeout(unfollowFriend, 600, idx+1);
        } else {
          clearTimeout();
          console.log('DONE. Go live your offline life.');
        }  
    };

    var idx=0;
    
    [...document.querySelectorAll('div[class~="uiScrollableArea"] div[data-testid="profile_grid_block_picture"]')].forEach( (a) => { doActions[idx++] = a; });

    unfollowFriend(0);
}
