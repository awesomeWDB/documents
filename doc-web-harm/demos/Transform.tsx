import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Affix } from 'antd';
import { transform, Input } from '.';
/**
 * 把x调转换为y调
 */

const input: Input = {
  string: `
  (35656)1(76523)
  (35656)1(765)3
  `,
  type1: 'ba',
  type2: 'c',
};

transform(input);

export default () => {
  return <div className="page">aaaaaa</div>;
};
