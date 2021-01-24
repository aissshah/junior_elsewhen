import React from 'react';
import { getData, API_BASE } from './../utils/dataHelper';

const Homepage = () => {
  const [orgName, setOrgName] = React.useState('elsewhencode');
  const [reposList, setReposList] = React.useState();

  React.useEffect(() => {
    const url = `${API_BASE}/orgs/${orgName}/repos`;
    getData(url).then((repos) => setReposList(repos));

    

  }, [])

  

  
  

  return (
    <main>
      <input type='text' placeholder='Type a Github organisation here...' value={orgName} onChange={(e) => setOrgName(e.target.value)} />
      <button>Hey Fetcho!</button>
      <h2>List of {orgName}'s Repositories</h2>
      
    </main>
  )

}

export default Homepage;
