import React from 'react';
import Collapsible from 'react-collapsible';
import { CollapsibleContainer } from '../Common/components';

const createMarkup = content => ({ __html: content });

const renderWorkData = data =>
  data.map(work =>
    (<Collapsible
      trigger={work.companyName}
      key={work.companyName}
      transitionTime={300}
    >
      <p>
        <strong>{work.role}, {work.timePeriod}</strong>
      </p>
      <p><strong>Responsibilities</strong></p>
      <ul>
        {work.responsibilities.map(resp => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>
      <p><strong>Achievements</strong></p>
      <ul>
        {work.achievements.map(achievement => (
          <li
            key={achievement}
            dangerouslySetInnerHTML={createMarkup(achievement)}
          />
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
