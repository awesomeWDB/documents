import React, { useState } from 'react';
import './Search.less';
import { Input, Button } from 'antd';
import { emojis, jumpIndexs, collections } from './data-emoji';
import Emoji from './Emoji';
import { useModel } from './DialogEmojiDetail';

export default (props: any) => {
  const [Dialog, setDialog]: any[] = useModel();
  const showModal = (emoji: any) => setDialog(emoji);

  const [resultEmojis, setResultEmojis] = useState<any[]>([]);
  const [groupUrls, setGroupUrls] = useState<any[]>([]);
  const [collectionUrls, setCollectionUrls] = useState<any[]>([]);
  console.log(collectionUrls);

  const handleSearch = (val: string) => {
    // 需要判断一下前缀，即相对路径:
    const prefix = location.href.endsWith('/') ? '../' : './';
    // collections
    const _collectionUrls = collections
      .filter(({ collectionName }) => collectionName.includes(val))
      .map(({ collectionName }) => ({
        url: `${prefix}collection/#${collectionName}`,
        text: collectionName,
      }));
    setCollectionUrls(_collectionUrls);
    // groups
    const _groupUrls: React.SetStateAction<any[]> = [];
    jumpIndexs.forEach((ids: any[]) => {
      ids.forEach(({ text }: any) => {
        if (text.includes(val)) {
          _groupUrls.push({
            url: `${prefix}#${text}`,
            text: text,
          });
        }
      });
    });
    setGroupUrls(_groupUrls);
    // emojis
    const _emojis = emojis.filter(
      ({
        // groupName,
        // subGroupName,
        image,
        nameZh,
        nameEn,
        // collections,
        detail: { keywords, code },
      }) =>
        val.includes(image) ||
        nameZh.includes(val) ||
        nameEn.includes(val) ||
        keywords.join(',').includes(val) ||
        code.includes(val),
    );
    setResultEmojis(_emojis);
    console.log(val, _collectionUrls, _groupUrls, _emojis);
  };
  return (
    <div data-component="search-container" className="page">
      {/* 搜索框 */}
      <Input.Search
        defaultValue="表情"
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
      {/* groups */}
      <div className="result-groups">
        {groupUrls.map(({ url, text }, index) => (
          <a key={index} target="_blank" href={url}>
            {text}
          </a>
        ))}
      </div>
      {/* collection */}
      <div className="result-collections">
        {collectionUrls.map(({ url, text }, index) => (
          <a key={index} target="_blank" href={url}>
            {text}
          </a>
        ))}
      </div>
      {/* emojis： */}
      <div className="emoji-container">
        {resultEmojis.map((emoji: any, index3: number) => (
          <Emoji
            key={index3}
            image={emoji.image}
            nameEn={emoji.nameEn}
            nameZh={emoji.nameZh}
            onClick={() => showModal(emoji)}
          ></Emoji>
        ))}
      </div>

      <Dialog></Dialog>
    </div>
  );
};
