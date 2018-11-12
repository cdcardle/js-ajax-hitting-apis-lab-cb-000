let gitHubUsers = 'https://api.github.com/users';
let username = document.getElementById('username').value;

function getRepositories() {
  if (username) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open('GET', `https://api.github.com/users/${username}/repos`);
    req.send();
  }
}

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(repo => `<li>${repo.name} - <a href="#" data-repo="${repo.name}" onclick="getCommits(this)">Get Commits</a></li>`).join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', `https://api.github.com/repos/${username}/${name}/commits`);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);

}



// 
// `<li>${repo.name} - <a href="#" data-repo="${repo.name}" onclick="getCommits(this)">Get Commits</a></li>`).join('')}</ul>`;
