import React from 'react';
import Collapsible from 'react-collapsible';
import glamorous from 'glamorous';
import { CollapsibleContainer } from '../Common/components';

const A = glamorous.a({
  color: '#22BBB5',
});

const createMarkup = content => ({ __html: content });

const renderProjectData = data =>
  data.map(project =>
    (<Collapsible
      trigger={project.name}
      key={project.name}
      transitionTime={300}
    >
      <p>Time Period: {project.dateCreated}</p>
      <p><strong>Description:</strong></p>
      <p>{project.description}</p>
      <p><strong>Reflection:</strong></p>
      <p dangerouslySetInnerHTML={createMarkup(project.reflection)} />
      <ul>
        {project.techUsed.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.github && (
        <A target="_blank" href={project.github}>Github</A>
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
