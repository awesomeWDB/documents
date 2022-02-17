export const TypeMap = {
  g: 'g',

  '#g': '#g',
  ba: '#g',

  a: 'a',

  '#a': '#a',
  bb: '#a',

  b: 'b',

  '#b': 'c',
  bc: 'c',

  c: 'c',

  '#c': '#c',
  bd: '#c',

  d: 'd',

  '#d': '#d',
  be: '#d',

  e: 'e',

  '#e': 'f',
  bf: 'e',

  f: 'f',

  '#f': '#f',
  bg: '#f',
} as const;

export const TypeLevel = [
  'g',
  '#g',
  'a',
  '#a',
  'b',
  'c',
  '#c',
  'd',
  '#d',
  'e',
  'f',
  '#f',
];

export type TypeKey = keyof typeof TypeMap;

export type TypeValue = typeof TypeMap[TypeKey];

export type Input = {
  string: string;
  type1: TypeKey;
  type2: TypeKey;
  [x: string]: any;
};

const setOffset = (input: Input) => {
  input._type1 = TypeMap[input.type1];
  input._type2 = TypeMap[input.type2];
  const count1 = TypeLevel.findIndex((item) => item === input._type1);
  const count2 = TypeLevel.findIndex((item) => item === input._type2);
  if (count1 === -1 || count2 === -1) {
    throw new Error('找不到匹配的调性！');
  }
  return (input._offset = count2 - count1);
};

const transformString = (input: Input) => {
  input.string.split('\n').map((line) => {});
  let result = [];
  let currentLevel = 0;
  let source = input.string;
  const lowReg = /^\(/;
  const highReg = /^\[/;
  const numberReg = /^\d+/;
  const whiteReg = /^\s+/;
  while (source) {
    if (source.match(lowReg)) {
      // 匹配低音(
      currentLevel--;
      source = source.slice(1);
    } else if (source.match(highReg)) {
      // 匹配高音(
      currentLevel++;
      source = source.slice(1);
    } else if (source.match(whiteReg)) {
      // 匹配空白：空格或换行，添加到结果集中
      const matched = source.match(whiteReg)![0];
      source = source.slice(matched.length);
      result.push(matched);
    } else if (source.match(numberReg)) {
      // 匹配空白：空格或换行，添加到结果集中
      const matched = source.match(whiteReg)![0];
      source = source.slice(matched.length);
      const numberList = matched.split('').map((item: string) => {
        if (currentLevel === 0) {
          return `${item}`;
        } else if (currentLevel === 1) {
          return `[${item}]`;
        } else if (currentLevel === 2) {
          return `[[${item}]]`;
        } else if (currentLevel === -1) {
          return `(${item})`;
        } else if (currentLevel === -2) {
          return `((${item}))`;
        }
      });
      numberList.forEach((item) => {
        result.push(item);
      });
    } else {
      console.log(source);
      throw new Error('解析错误！');
    }
  }
};

export const transform = (input: Input) => {
  setOffset(input);
  console.log(input);
  transformString(input);
};
