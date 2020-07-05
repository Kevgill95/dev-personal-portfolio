import React, { Component } from 'react';
import Pdf from '../documents/Resume.pdf';

function Resume(props) {
    return (
      <div>
        <a href={Pdf} target="_blank">{Pdf}</a>
      </div>
    );
}

export default Resume;