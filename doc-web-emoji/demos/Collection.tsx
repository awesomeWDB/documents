import React, { useState } from 'react';
import { collections } from './data-emoji';
import Emoji from './Emoji';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Affix } from 'antd';
import { useModel } from './DialogEmojiDetail';

/**
 * 专题集合
 */

const Menus = () => (
  <Menu>
    {collections.map(({ collectionName }, index) => {
      const url = `#${collectionName}`;
      return (
        <Menu.Item key={index}>
          <a target="_blank" href={url}>
            {collectionName}
          </a>
        </Menu.Item>
      );
    })}
  </Menu>
);

const Dropdowns = () => {
  const [top, setTop] = useState(64);
  return (
    <Affix offsetTop={top} className="dropdowns">
      <Dropdown overlay={Menus} placement="bottomCenter" arrow>
        <Button type="primary">选择专题</Button>
      </Dropdown>
    </Affix>
  );
};

export default () => {
  const [Dialog, setDialog]: any[] = useModel();
  const showModal = (emoji: any) => setDialog(emoji);

  return (
    <div className="page">
      <Dropdowns></Dropdowns>

      {collections.map(({ collectionName, children }, index) => (
        <div className="collection-item" key={index}>
          <h2 className="collection-name" id={collectionName}>
            {collectionName}
          </h2>
          <div className="emoji-container">
            {children.map((emoji: any, index3: number) => (
              <Emoji
                key={index3}
                image={emoji.image}
                nameEn={emoji.nameEn}
                nameZh={emoji.nameZh}
                onClick={() => showModal(emoji)}
              ></Emoji>
            ))}
          </div>
        </div>
      ))}

      <Dialog></Dialog>
    </div>
  );
};
