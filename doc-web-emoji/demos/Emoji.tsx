import React from 'react';
import './Emoji.less';
import EmojiCopyItem from './EmojiCopyItem';

export default (props: any) => {
  return (
    <div
      data-component="emoji-item"
      className="emoji-item"
      onClick={() => props.onClick(props)}
    >
      <EmojiCopyItem className="left" image={props.image}></EmojiCopyItem>
      <div className="right">
        <div className="emoji-nameEn">{props.nameEn}</div>
        <div className="emoji-nameZh">{props.nameZh}</div>
      </div>
    </div>
  );
};
