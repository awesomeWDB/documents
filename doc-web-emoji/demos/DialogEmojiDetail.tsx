import React, { useState } from 'react';
import { Modal } from 'antd';
import './DialogEmojiDetail.less';
import EmojiCopyItem from './EmojiCopyItem';

export default (props: any) => {
  console.log(props);
  return;
};

export const useModel = () => {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail]: any = useState({ nameZh: '1', nameEn: '2' });
  const setState = (options: any) => {
    setVisible(true);
    setDetail(options);
    console.log(options);
  };
  return [
    () => (
      <Modal
        data-component="dialog-emoji-detail"
        className="dialog-emoji-detail"
        title={detail.nameZh}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <div
          className="line emoji-image"
          style={{ lineHeight: '100px', fontSize: '100px', margin: '10px' }}
        >
          <EmojiCopyItem image={detail.image}></EmojiCopyItem>
        </div>
        <div className="line">
          <span className="left">分类：</span>
          <span className="right">{detail.groupName}</span>
        </div>
        <div className="line">
          <span className="left">子类：</span>
          <span className="right">{detail.subGroupName}</span>
        </div>
        <div className="line">
          <span className="left">中文名：</span>
          <span className="right">{detail.nameZh}</span>
        </div>
        <div className="line">
          <span className="left">英文名：</span>
          <span className="right">{detail.nameEn}</span>
        </div>
        <div className="line">
          <span className="left">代码：</span>
          <span className="right">{detail.detail && detail.detail.code}</span>
        </div>
        <div className="line">
          <span className="left">unicode编码：</span>
          <span className="right">
            {detail.detail && detail.detail.unicode_code}
          </span>
        </div>
        <div className="line">
          <span className="left">关键词：</span>
          <span className="right">
            {detail.detail && detail.detail.keywords.join('，')}
          </span>
        </div>
      </Modal>
    ),
    setState,
  ];
};
