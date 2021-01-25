import React from 'react';
import { useLocation } from 'react-router-dom';

import { getRepoContributors } from '../utils/dataHelper';
import Table from '../components/Table';

const Contributorspage = () => {
  const [contributors, setContributors] = React.useState()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const organisation = searchParams.get('org');
  const repository = searchParams.get('repo');

  React.useEffect(()=> {
    if (organisation) {
      getRepoContributors(organisation, repository, setContributors);
    }
  }, [organisation, repository])

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
      <h2>List of {repository}'s Contributors</h2>
      {contributors ? <Table headers={contributorsTableHeaders} data={contributorsTableContent} />:<p>Loading...</p>}
    </main>
  )
}

export default Contributorspage;