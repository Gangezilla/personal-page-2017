import React from 'react';
import Collapsible from 'react-collapsible';
import { CollapsibleContainer } from '../Common/components';

const renderWorkData = data =>
  data.map(work =>
    (<Collapsible
      trigger={work.companyName}
      key={work.companyName}
      transitionTime={300}
    >
      <p>{work.role}, {work.timePeriod}</p>
      <p>Responsibilities</p>
      <ul>
        {work.responsibilities.map(resp => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>
      <p>Achievements</p>
      <ul>
        {work.achievements.map(achievement => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </Collapsible>),
  );

const Work = props => [
  <CollapsibleContainer transitionTime={300} key="CollapsibleContainer">
    <Collapsible trigger="Work">
      {renderWorkData(props.data)}
    </Collapsible>
  </CollapsibleContainer>,
];

export default Work;
