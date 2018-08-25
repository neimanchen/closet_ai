import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Outfit = (props) => {
  return (
    <Card centered={true} fluid={true}>
      <Image src={props.top.s3PublicUrl}/>
      <Image src={props.bottom.s3PublicUrl}/>
    </Card>
  )
};

export default Outfit;
