import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function CustomTooltip(props) {
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{props.message}</Tooltip>}
      >
        {props.children}
      </OverlayTrigger>
    </>
  );
}
