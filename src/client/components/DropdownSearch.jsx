import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownSearchSelection = (props) => (
  <Dropdown placeholder={props.text} id={props.id} value={props.value} fluid multiple search selection options={props.options} onChange={props.onChange}/>
);

export default DropdownSearchSelection
