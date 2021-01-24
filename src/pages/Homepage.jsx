import React from 'react';

const Homepage = () => {
  const [orgName, setOrgName] = React.useState();
  const [reposList, setReposList] = React.useState();

  React.useEffect(() => {
    

  }, [])

  return (
    <main>
      <input type='text' placeholder='Type a Github organisation here...' value={orgName} onChange={(e) => setOrgName(e.target.value)} />
      <button>Hey Fetcho!</button>
      
    </main>
  )

}

export default Homepage;
