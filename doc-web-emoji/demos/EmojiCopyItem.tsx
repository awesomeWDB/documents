import React from 'react';
import './EmojiCopyItem.less';
import copy from './clipboard';

export default (props: any) => {
  return (
    <div
      data-component="emoji-image-item"
      className={props.className + ' emoji-image-item'}
      onClick={(e) => {
        e.stopPropagation();
        copy(props.image, e);
      }}
    >
      <span className="copy-target">{props.image}</span>
      <span className="copy-item">📑</span>
    </div>
  );
};
