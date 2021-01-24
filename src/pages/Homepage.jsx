import React from 'react';
import { getData, API_BASE } from './../utils/dataHelper';

import Table from './../components/Table';

const Homepage = () => {
  const [orgName, setOrgName] = React.useState('elsewhencode');
  const [reposList, setReposList] = React.useState();
  // const [repoTableContent, setRepoTableContent] = React.useState();

  let repoTableContent;

  React.useEffect(() => {
    const url = `${API_BASE}/orgs/${orgName}/repos`;
    getData(url).then((repos) => setReposList(repos));

  }, [])

  const repoTableHeaders = (
    <tr>
      <th>Repo ID</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  );

  if (reposList) {
    repoTableContent = reposList.map((repo) => {
      return (
        <tr key={repo.id}>
          <td>{repo.id}</td>
          <td>{repo.name}</td>
          <td>{repo.description}</td>
          <td>Who contributed?</td>
        </tr>
      )
    })
  }

  return (
    <main>
      <input type='text' placeholder='Type a Github organisation here...' value={orgName} onChange={(e) => setOrgName(e.target.value)} />
      <button>Hey Fetcho!</button>
      <h2>List of {orgName}'s Repositories</h2>
      {reposList ? <Table headers={repoTableHeaders} data={repoTableContent} />:<p>Type in an organisation name into the box above to see results</p>}
    </main>
  )

}

export default Homepage;
