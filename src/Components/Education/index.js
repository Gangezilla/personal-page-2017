import React from 'react';
import Collapsible from 'react-collapsible';
import { CollapsibleContainer } from '../Common/components';

const renderEducationData = data =>
  data.map(school =>
    (<Collapsible
      trigger={school.university}
      key={school.university}
      transitionTime={300}
    >
      <p>{school.degree}, {school.major}, {school.timePeriod}</p>
      <ul>
        {school.highlights.map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </Collapsible>),
  );

const Education = props => [
  <CollapsibleContainer transitionTime={300} key="CollapsibleContainer">
    <Collapsible trigger="Education">
      {renderEducationData(props.data)}
    </Collapsible>
  </CollapsibleContainer>,
];

export default Education;
