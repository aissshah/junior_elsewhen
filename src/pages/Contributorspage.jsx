import React from 'react';
// import { BrowserRouter, Route, Link }
import { getRepoContributors } from '../utils/dataHelper';

import Table from '../components/Table';

const Contributorspage = ({orgName, repoName}) => {
  const [contributors, setContributors] = React.useState()
  React.useEffect(()=> {
    getRepoContributors(orgName, repoName, setContributors);
  }, [repoName])

  let contributorsTableContent;

  const contributorsTableHeaders = (
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Contributions</th>
    </tr>
  );

  if (contributors) {
    contributorsTableContent = contributors.map((contributor) => {
      return (
        <tr key={contributor.id}>
          <td>{contributor.id}</td>
          <td><a href={contributor.html_url} target='_blank' rel='noreferrer noopener'>{contributor.login}</a></td>
          <td>{contributor.contributions}</td>
        </tr>
      )
    })
  }

  return (
    <main>
      <h2>List of {repoName}'s Contributors</h2>
      {contributors ? <Table headers={contributorsTableHeaders} data={contributorsTableContent} />:<p>Type in an organisation name into the box above to see results</p>}
    </main>
  )
}

export default Contributorspage;