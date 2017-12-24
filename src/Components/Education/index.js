import React from 'react';
import Collapsible from 'react-collapsible';
import glamorous from 'glamorous';

const CollapsibleContainer = glamorous.div({
  maxWidth: '800px',
});

const renderEducationData = data =>
  data.map(school =>
    (<Collapsible
      trigger={school.university}
      key={school.university}
    >
      <p>{school.degree}, {school.major}, {school.timePeriod}</p>
      <ul>
        {school.highlights.map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </Collapsible>),
  );

const Education = () => [
  <CollapsibleContainer>
    <Collapsible trigger="Education">
      {renderEducationData(education)}
    </Collapsible>
  </CollapsibleContainer>,
];

export default Education;

const education = [
  {
    university: 'University of Technology, Sydney',
    degree: 'Bachelor of Integrated Product Design',
    major: 'Interaction Design',
    timePeriod: '2013 - 2015',
    highlights: [
      'Made a lot of design prototypes',
      'Threw 95% of them away',
      'Learnt to polish the good, and refine the bad through honesty and user interviews',
      'Worked hard to provide good UX on my designs',
      'Learned a lot about using innovation to solve problems',
    ],
  },
];
