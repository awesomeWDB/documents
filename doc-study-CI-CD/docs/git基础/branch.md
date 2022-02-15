---
toc: menu
order: 1
---

# 分支操作

## 列出分支

`git branch`

## 创建分支

`git branch (branchname)`

## 创建分支

`git branch (branchname)`

## 切换分支

`git branch (branchname)`

## 合并分支

`git merge (branchname)`

## 示例

```bash
# 创建新分支并立即切换到该分支
git checkout -b (branchname)

# 删除分支
git branch -d (branchname)

```

## 解决冲突

当两个分支都对某个文件做了不一样的修改时，合并这两个分支将会产生冲突，解决冲突：

- 打开冲突文件，进行编辑（命令行或者编辑器）
- 修改冲突（也就是选择需要的代码，删掉冲突的代码）
- `git add .`操作，告诉 git 冲突已经解决
- `git commit`操作，进行提交
