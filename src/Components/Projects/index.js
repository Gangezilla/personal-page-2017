import React from 'react';
import Collapsible from 'react-collapsible';
import glamorous from 'glamorous';
import { CollapsibleContainer } from '../Common/components';

const A = glamorous.a({
  color: '#22BBB5',
});

const renderProjectData = data =>
  data.map(project =>
    (<Collapsible
      trigger={project.name}
      key={project.name}
      transitionTime={300}
    >
      <p>{project.dateCreated}</p>
      <p>{project.description}</p>
      <p>{project.reflection}</p>
      <ul>
        {project.techUsed.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.github && (
        <A href={project.github}>Github</A>
      )}
    </Collapsible>),
  );

const Projects = props => [
  <CollapsibleContainer transitionTime={300} key="CollapsibleContainer">
    <Collapsible trigger="Projects">
      {renderProjectData(props.data)}
    </Collapsible>
  </CollapsibleContainer>,
];

export default Projects;
