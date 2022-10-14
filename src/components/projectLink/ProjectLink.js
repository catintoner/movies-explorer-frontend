import React from 'react';

import './ProjectLink.css';

import portfolioLink from '../../images/portfolio__link.svg';

function ProjectLink(props) {
  return (
    <li className='project'>
      <a
        className='project__name'
        target='_blank'
        href={props.linkUrl}
        rel="noopener noreferrer"
      >
        {props.linkName}
      </a>
      <a
        className='project__link-logo'
        target='_blank'
        href={props.linkUrl}
        rel="noopener noreferrer"
      >
        <img src={portfolioLink} alt='Изображение стрелки' />
      </a>
    </li>
  );
}

export default ProjectLink;
