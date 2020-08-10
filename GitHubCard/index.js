import axios from 'axios';



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator(gitObj) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');

  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');

  const profile = document.createElement('p');
  const userAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  profile.appendChild(userAddress);

  card.appendChild(userImg);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name')
  username.classList.add('username');

  userImg.src = gitObj.avatar_url;
  //return userImg.src;
  userAddress.href = gitObj.html_url;

  name.textContent = gitObj.name;
  //return name;
  username.textContent = gitObj.login;

  location.textContent = `Location: ${gitObj.location}`;
  profile.textContent = 'Profile: ${userAddress}';
  userAddress.textContent = `${gitObj.html_url}`;
  followers.textContent = `Followers: ${gitObj.followers}`;
  following.textContent = `Following: ${gitObj.following}`;
  bio.textContent = `Bio: ${gitObj.bio}`;

  return card;
}


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function cardAdder(card) {
  const cards = document.querySelector('.cards');
  cards.appendChild(card);
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = [
  'https://api.github.com/users/tetondan', 
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell', 
];

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/* better way would be to just link it in HTML using the script tag

  - includes everything rather than npm install since it is missing things sometimes 
*/




axios.get('https://api.github.com/users/elijahk247')
  .then(res => {
    console.log(res.data);
    const gitData = res.data;
    console.log(gitData);

    //cardAdder(gitData.login);
    console.log(cardCreator(gitData));
    cardAdder(cardCreator(gitData));
  })
  .catch(err => {
    console.log('Error: ', err);
  })

followersArray.forEach(function(element) {
  axios.get(element)
    .then(res => {
      console.log(res.data);
      const gitData = res.data;

      console.log(cardCreator(gitData));
      cardAdder(cardCreator(gitData));
    })
    .catch(err => {
      console.log("Error: ", err);
    })
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/





const pTester = document.createElement('p');
const aTester = document.createElement('a');
pTester.appendChild(aTester);

console.log(pTester);



