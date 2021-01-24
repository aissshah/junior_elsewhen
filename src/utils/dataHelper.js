export const API_BASE = 'https://api.github.com';

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error ${response.status} with the request`);
    return;
  }
  return response.json();
};

export const getData = async (url) => {
  try {
    const response = await fetch(url);
    return checkResponse(response);
  }
  catch (err) {
    throw new Error(`fetch getData failed ${err}`);
  }
};

export const getOrgRepos = (orgName, setRepos) => {
  const url = `${API_BASE}/orgs/${orgName}/repos`;
  return getData(url).then((repos) => setRepos(repos));
}

export const getRepoContributors = (orgName, repoName, setContributors) => {
  const url = `${API_BASE}/repos/${orgName}/${repoName}/contributors`;
  return getData(url).then((contributor) => setContributors(contributor))
}