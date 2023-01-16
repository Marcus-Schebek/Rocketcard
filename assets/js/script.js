const buttonGetInfo = document.querySelector("#submitButton");
const buttonChangeColor = document.querySelector(".colorButton");
const card = document.querySelector(".card");
const input = document.querySelector('#input-field')
const colors = ["#32264d", "#04d361", "#d4c2ff", "#0E1218"];
var currentColor = 0;


buttonGetInfo.addEventListener('click', () => {
  const profileImage = document.querySelector('.imgUser')
  const nameUser = document.querySelector('#userName');
  const followersInfo = document.querySelector('#followers');
  const followingInfo = document.querySelector('#following');
  const reposInfo = document.querySelector('#repos');
  const companyInfo = document.querySelector('#company');
  const locationInfo = document.querySelector('#location');
  let user = input.value;
  const url = `https://api.github.com/users/${user}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      profileImage.src = data.avatar_url;
      nameUser.textContent = data.name;
      followersInfo.textContent = "Seguidores: " + data.followers;
      followingInfo.textContent = "Seguindo: " + data.following;
      reposInfo.textContent = "Repositórios: " + data.public_repos;
      companyInfo.textContent = data.company;
      locationInfo.textContent = data.location;

    })
    .catch(error => console.error(error));

})

buttonChangeColor.addEventListener('click', () => {
  card.style.backgroundColor = colors[currentColor]
  console.log(currentColor)
  if (currentColor >= colors.length - 1) {
    currentColor = 0;
  } else {
    currentColor++;
  }

});