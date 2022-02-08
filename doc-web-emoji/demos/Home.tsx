import React, { useState } from 'react';
import { groups, jumpIndexs } from './data-emoji';
import './Home.less';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Affix } from 'antd';
import Emoji from './Emoji';
import { useModel } from './DialogEmojiDetail';

/**
 * 首页分类
 */

const Menus = jumpIndexs.map((ids: { text: string; url: string }[]) => (
  <Menu>
    {ids.map(({ text, url }, index) => (
      <Menu.Item key={index}>
        <a target="_blank" href={url}>
          {text}
        </a>
      </Menu.Item>
    ))}
  </Menu>
));

const Dropdowns = () => {
  const [top, setTop] = useState(64);
  return (
    <Affix offsetTop={top} className="dropdowns">
      <div>
        {Menus.map((menu, index) => (
          <Dropdown overlay={menu} key={index} placement="bottomCenter" arrow>
            <Button type="primary">{jumpIndexs[index][0].text}</Button>
          </Dropdown>
        ))}
      </div>
    </Affix>
  );
};

export default () => {
  const [Dialog, setDialog]: any[] = useModel();
  const showModal = (emoji: any) => setDialog(emoji);

  return (
    <div className="page">
      <Dropdowns></Dropdowns>

      {groups.map(({ groupName, subGroups }, index) => (
        <div className="group-item" key={index}>
          <h2 className="group-name" id={groupName}>
            {groupName}
          </h2>
          {subGroups.map(({ subGroupName, children }: any, index2: number) => (
            <div className="sub-group-item" key={index2}>
              <h3 className="sub-group-name" id={subGroupName}>
                {subGroupName}
              </h3>
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
        </div>
      ))}

      <Dialog></Dialog>
    </div>
  );
};
