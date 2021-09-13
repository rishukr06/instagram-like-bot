// @author: Rishu Kumar (https://rishu.engineer/)
// @descrioption: Instagram Like Bot
let counter = 0;
const totalPost = 200;
// sleep to avoid 429
// its not a foolproof solution
const sleepTime = 25000;
// min time require to load the post ~depends on your internet speed
const minWatchTime = 3000;

const posts = document.getElementsByClassName("_9AhH0");
posts[0].click();
await new Promise(r => setTimeout(r, minWatchTime));
const firstLikeButton = document.querySelectorAll('[aria-label="Like"]');
if (firstLikeButton.length > 0) {
    firstLikeButton[0].parentElement.click();
}

for (let i = 0; i < totalPost; i++) {
    if (counter === 15) {
        console.log('Sleeping...');
        await new Promise(r => setTimeout(r, sleepTime));
      	counter = 0;
    }
    await new Promise(r => setTimeout(r, 500));
    const next = document.getElementsByClassName(" _65Bje  coreSpriteRightPaginationArrow");
    next[0].click();
  	// Random Number between 100 and 1000
  	const randomMilliSeconds = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
  	const watchTime = minWatchTime + randomMilliSeconds;
    await new Promise(r => setTimeout(r, watchTime));
    const likeButton = document.querySelectorAll('[aria-label="Like"]');
    if (likeButton.length > 0) {
        likeButton[0].parentElement.click(); 
      	counter += 1;
      	console.log(`counter = ${counter}`);
    }
}
