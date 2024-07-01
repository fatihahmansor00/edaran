import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyCustomNoteIcon from '/img/info.png';

export default function AdmonitionWrapper(props) {
  if (props.type !== 'info') {
    return <Admonition title="My Custom Admonition Title" {...props} />;
  }
  return <Admonition icon={<img src={MyCustomNoteIcon} alt="Info Icon" />} {...props} />;
}