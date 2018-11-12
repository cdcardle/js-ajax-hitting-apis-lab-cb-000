function displayCommits() {
  const commits = JSON.parse(this.responseText);

}

function getRepositories() {
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + `${username}` '/repos');
  req.send();
}

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
}
