//variables
const tweetList = document.getElementById('tweet-list');




//EventListeners
eventListeners();



function eventListeners() {
	//Form submission
	document.querySelector('#form').addEventListener('submit', newTweet);

	//Remove tweet from the list
	tweetList.addEventListener('click', removeTweet);

	//document.ready()
	document.addEventListener('DOMContentLoaded', localStorageOnLoad);


}


//Functions

function newTweet(e) {
	e.preventDefault();

	//Read the text area value
	const tweet = document.getElementById('tweet').value;


	//create remove btn
	const removeBtn = document.createElement('a');
	removeBtn.classList = 'remove-tweet';
	removeBtn.textContent = 'X';
 

	//create an li element
	const li = document.createElement('li');
	li.textContent = tweet;
	


	//Add the remove button to each tweet
	li.appendChild(removeBtn);

	//Add to the list 
	tweetList.appendChild(li);

	//Add to local storage
	addTweetLocalStorage(tweet);

	alert("Tweet added!");

	this.reset();//resets the input

}

//Removes the Tweets from the DOM

	function removeTweet(e) {
		if(e.target.classList.contains('remove-tweet')) {
			e.target.parentElement.remove();
		} 

		//Remove from storage
		removeTweetLocalStorage( e.target.parentElement.textContent );
	}

//Adds the tweets into the local storage

	function addTweetLocalStorage(tweet) {

		let tweets = getTweetsFromStorage();

		// Add tweet into the array

		tweets.push(tweet);

		// Convert tweet array into a string
		localStorage.setItem('tweets', JSON.stringify(tweets));

	}

	function getTweetsFromStorage() {
		let tweets;
		let tweetsLS = localStorage.getItem('tweets');

		//get the values, if null is returned then we create an empty array
		if(tweetsLS === null) {
			tweets = [];
		} else {
			tweets = JSON.parse( tweetsLS );
		}
		return tweets;
	}

	//Prints local storage on load
	function localStorageOnLoad() {
		let tweets = getTweetsFromStorage();

		//Loop through storage and print value

		tweets.forEach(function(tweet) {

			//create remove btn
			const removeBtn = document.createElement('a');
			removeBtn.classList = 'remove-tweet';
			removeBtn.textContent = 'X';
		 

			//create an li element
			const li = document.createElement('li');
			li.textContent = tweet;
			


			//Add the remove button to each tweet
			li.appendChild(removeBtn);

			//Add to the list 
			tweetList.appendChild(li);

		});
	}


	//Removes the tweet from local storage

	function removeTweetLocalStorage(tweet) {

		//get tweets from storage
		let tweets = getTweetsFromStorage();

		//Remove the X from the tweets

		const tweetDelete = tweet.substring( 0, tweet.length - 1 );//removes x (last element)

		//Loop through the tweets and remove the tweets
		tweets.forEach(function(tweetLS, index) {
			if(tweetDelete === tweetLS) {

				//remove the element from array at ant location( middle also)
				tweets.splice(index, 1);
			}
		});


		//save the data(after removing save the data)
		localStorage.setItem('tweets', JSON.stringify(tweets));
	}