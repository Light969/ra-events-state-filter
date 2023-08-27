import React, { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

function Portfolio({ projectList }) {
  const buttonList = ["All", "Websites", "Flayers", "Business Cards"];

  const [filterProjects, setFilterProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    
    e.target.classList.add('active');

    const select = e.target.textContent;
    
    if (select === 'All') {
        setFilterProjects(projectList);
    } else {
        setFilterProjects(
        projectList.filter(item => item.category === select)
      );
    }

    setSelected(select);
    // console.log(select);
  }

  return (
    <div className='container'>
      <Toolbar 
        filters={buttonList}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='gallery'>
        <ProjectList projects={filterProjects} /> 
      </div>
    </div>
    );
}

export default Portfolio;