import React from 'react';
import Skill from './Skill';
import { HTMLCourses } from '../../data/skills';

const HTML = (props) => {
  let skills = HTMLCourses.map((skill) => {
    return <Skill title={skill.title}
                   desc={skill.description}
                   img={skill.img_src}
                   key={skill.id} />
  }); 
  return (
    <div>
      <ul>
        {skills}    
      </ul>
    </div>
  );
}

export default HTML;