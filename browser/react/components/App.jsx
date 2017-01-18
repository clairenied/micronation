import React, { Component } from 'react';
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Poems from '../components/Poems'
import axios from 'axios';
import store from '../store'

export default function (props) {
	return(
		<div>
      <div className="main">
	      {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
		</div>
	)
}