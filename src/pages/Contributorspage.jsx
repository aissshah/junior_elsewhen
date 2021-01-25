import React from 'react';
import { useLocation } from 'react-router-dom';

import { getRepoContributors } from '../utils/getDataFunctions';
import Table from '../components/Table';

const Contributorspage = () => {
  //Variable and state initialisation
  const [contributors, setContributors] = React.useState()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const organisation = searchParams.get('org');
  const repository = searchParams.get('repo');

  //data fetch request runs on page load using information from the path
  React.useEffect(()=> {
    if (organisation) {
      getRepoContributors(organisation, repository, setContributors);
    }
  }, [organisation, repository])
  
  //Populate table headers and data
  const contributorsTableHeaders = (
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Contributions</th>
    </tr>
  );
  
  let contributorsTableContent;

  if (contributors) {
    contributorsTableContent = contributors.map((contributor) => {
      return (
        <tr key={contributor.id}>
          <td>{contributor.id}</td>
          <td><a href={contributor.html_url} target='_blank' rel='noreferrer noopener'>{contributor.login}</a></td>
          <td>{contributor.contributions}</td>
        </tr>
      );
    });
  };

  return (
    <main>
      <h2>List of {repository}'s Contributors</h2>
      {contributors ? <Table headers={contributorsTableHeaders} data={contributorsTableContent} />:<p>Loading...</p>}
    </main>
  )
}

export default Contributorspage;