import React from 'react';
import { css, styled, setup } from 'goober';

setup(React.createElement)

export const Ol = styled('ol')`
margin: 0;
padding-bottom: 2.2rem;
list-style-type: none;
`
export const Li = styled('li')`
display: inline-block;
text-align: center;
line-height: 4.8rem;
padding: 0 0.7rem;
cursor: pointer;

color: silver;
border-bottom: 2px solid silver;

&:hover,
&:before {
  color: #0FA0CE;
}
&:after {
  content: "\\00a0\\00a0";
}   
span {
  padding: 0 1.5rem;
}
&:before {
  position: relative;
  float: left;
  left: 50%;
  width: 1.2em;
  line-height: 1.4em;
  border-radius: 0;
  bottom: -3.99rem;
}
`
export const Todo = css`
&:before {
  content: "\u039F";
  color: silver;
  background-color: white;
}
`
export const Doing = css`
&:before {
  content: "\u2022";
  color: white;
  background-color: #33C3F0;  
}
`
export const Done = css`
&:before {
  content: "\u2713";
  color: white;
  background-color: #33C3F0;
  border-bottom: 2px solid 
}
`
