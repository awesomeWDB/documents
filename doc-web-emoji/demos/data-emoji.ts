import emojis from './data-emoji.json';

/**
 * 构造group、subGroup、emoji、collection的数据结构
 */

const resultGroups: any[] = [];
const resultCollections: any[] = [];

emojis.forEach((emoji: any) => {
  const { groupName, subGroupName, detail, collections } = emoji;
  const { keywords } = detail;
  // group
  let targetGroup = resultGroups.find((item) => item.groupName === groupName);
  if (!targetGroup) {
    targetGroup = { groupName, subGroups: [] };
    resultGroups.push(targetGroup);
  }

  // subGroup
  let targetSubGroup = targetGroup.subGroups.find(
    (item: { subGroupName: any }) => item.subGroupName === subGroupName,
  );
  if (!targetSubGroup) {
    targetSubGroup = { subGroupName, children: [emoji] };
    targetGroup.subGroups.push(targetSubGroup);
  } else {
    targetSubGroup.children.push(emoji);
  }

  // collection
  collections.forEach((collectionName: string) => {
    let targetCollection = resultCollections.find(
      (item: { collectionName: string }) =>
        item.collectionName === collectionName,
    );
    if (!targetCollection) {
      targetCollection = { collectionName, children: [emoji] };
      resultCollections.push(targetCollection);
    } else {
      targetCollection.children.push(emoji);
    }
  });
});

// 别名
const groups = resultGroups;
const collections = resultCollections;

// 索引
const jumpIndexs = groups.map(({ groupName, subGroups }) => {
  const result = [];
  result.push({ text: groupName, url: `#${groupName}` });
  subGroups.forEach(({ subGroupName }: any) => {
    result.push({ text: subGroupName, url: `#${subGroupName}` });
  });
  return result;
});

console.log(emojis, groups, collections, jumpIndexs);

export { emojis, groups, collections, jumpIndexs };
