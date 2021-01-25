import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { getOrgRepos } from '../utils/getDataFunctions';
import Table from './../components/Table';

const Homepage = () => {
  //Variable and state initialisation
  const [orgName, setOrgName] = React.useState(); //not case-sensitive
  const [reposList, setReposList] = React.useState();
  const history = useHistory();
  const location = useLocation();
  
  //ensures if using a shared url, orgName is updated and fetch request runs on initial page load
  React.useEffect(()=> {
    if (!orgName && location.pathname !== '/') {
      const pathname = location.pathname.substring(1, location.pathname.length);
      setOrgName(pathname);
      getOrgRepos(pathname, setReposList)
    }
  },[])
  
  //Populate table headers and data
  const repoTableHeaders = (
    <tr>
      <th>Repo ID</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  );

  let repoTableContent;
  
  if (reposList) {
    repoTableContent = reposList.map((repo) => {
      return (
        <tr key={repo.id}>
          <td>{repo.id}</td>
          <td>{repo.name}</td>
          <td>{repo.description}</td>
          <td><Link to={`/contributors?org=${orgName}&repo=${repo.name}`}>Who contributed?</Link></td>
        </tr>
      )
    })
  }

  //clicking the button starts the fetch request and changes the url path to include org name for shareability
  return (
    <main>
      <h1>Fetch GitHub Fetch</h1>
      <p>View an organisation's public GitHub repositories</p>
      <form> 
        <input type='text' id='searchName' placeholder='Type a Github organisation here...' value={orgName} onChange={(e)=>setOrgName(e.target.value)} />
        <button onClick={(e) => {
          e.preventDefault(); 
          getOrgRepos(orgName, setReposList);
          history.replace(`/${orgName}`)
          }}>Hey Fetcho!</button>
      </form>
      <h2>List of {orgName}'s Repositories</h2>
      {reposList ? <Table headers={repoTableHeaders} data={repoTableContent} />:<p>Type in an organisation name into the box above to see results</p>}
    </main>
  )

}

export default Homepage;

