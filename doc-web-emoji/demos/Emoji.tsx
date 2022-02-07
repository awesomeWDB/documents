import React from 'react';
import './Emoji.less';

export default (props: any) => {
  return (
    <div
      data-component="emoji-item"
      className="emoji-item"
      onClick={() => props.onClick(props)}
    >
      <div className="emoji-image left">{props.image}</div>
      <div className="right">
        <div className="emoji-nameEn">{props.nameEn}</div>
        <div className="emoji-nameZh">{props.nameZh}</div>
      </div>
    </div>
  );
};
