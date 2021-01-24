import React from 'react';
// import { BrowserRouter, Route }
import { getOrgRepos } from './../utils/dataHelper';

import Table from './../components/Table';

const Homepage = () => {
  const [orgName, setOrgName] = React.useState(); //not case-sensitive
  const [reposList, setReposList] = React.useState();
  // const [repoTableContent, setRepoTableContent] = React.useState();
  let repoTableContent;

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
      {/* made it a form to include enter  */}
      {/* //TODO if repolist length = 0, organisation does not exist, textbox appear, highlight red */}
      <form> 
        <input type='text' id='searchName' placeholder='Type a Github organisation here...' onChange={(e)=>setOrgName(e.target.value)} />
        <button onClick={(e) => {
          e.preventDefault(); 
          getOrgRepos(orgName, setReposList)
          }}>Hey Fetcho!</button>
      </form>
      <h2>List of {orgName}'s Repositories</h2>
      {reposList ? <Table headers={repoTableHeaders} data={repoTableContent} />:<p>Type in an organisation name into the box above to see results</p>}
    </main>
  )

}

export default Homepage;

