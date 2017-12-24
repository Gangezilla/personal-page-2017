import React from 'react';
import Collapsible from 'react-collapsible';
import glamorous from 'glamorous';

import '../collapsible.css';

const CollapsibleContainer = glamorous.div({
  maxWidth: '800px',
});

const renderWorkData = data =>
  data.map(work =>
    (<Collapsible
      trigger={work.companyName}
      key={work.companyName}
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
  <CollapsibleContainer>
    <Collapsible trigger="Work">
      {renderWorkData(test)}
    </Collapsible>
  </CollapsibleContainer>,
];

export default Work;

const test = [
  {
    companyName: 'APG & Co.',
    role: 'Junior Web Developer',
    responsibilities: [
      'Created content assets for online team, and worked to implement new features on our front end',
      'Worked on back end of our websites on Demandware to implement features and shuttle data around',
      'Developing robust code for various functions of our websites',
      'Helped to streamline and improve our email development process',
      'Develop internal tools to be used by online managers, such as an online catalog, and provided support and documentation on how to use them',
      'Written documentation to support new staff, and to document both new and old features on the websites',
      'Implemented major redesigns of site components, including modernising our header and product navigation',
      'Worked collaboratively with technical and non-technical people to solve problems',
      'Fixed bugs (life threatening, and not so life threatening), such as mysterious 404s, show stopping credit card bugs and many more',

    ],
    achievements: [
      'Redesigned our bloated six page checkout into a sleek one page wonder',
      'Tore out all of our old CSS and converted it to SASS (cutting off 200kb in the process)',
      'Rewrote thousands of lines of mysterious JavaScript into glorious, understandable React',
      'Played a big part in planning the architecture and structure for our new React configuration',
      "Most importantly, I have become a much more confident web developer. I've been fortunate enough to work with a great team and I've learnt a lot from them",
      'Got certifications for developing in Demandware',
      'Have significantly reduced the amount of dirty, dirty hacks that run in my code',
    ],
    timePeriod: 'Feb 2016 - Present',
  }, {
    companyName: 'Apple Inc.',
    role: 'Specialist',
    responsibilities: [
      'Sold people products to help them solve their problems',
      'Learnt how to take apart and repair Apple products',
      'Trained new staff one on one and in groups, and mentored them',
      'Empathised with customers, and helped with their issues',
    ],
    achievements: [
      'Learnt how to figure out what people care about, and tailor my service to that',
      'Figured out how powerful empathy is, especially in solving problems that angry and frustrated people have',
      'Developed great skills in balancing competing needs of different parties',
    ],
    timePeriod: 'Dec 2010 - Feb 2016',
  },
];

