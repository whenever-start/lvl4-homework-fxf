# vue作业1：tab选项卡，学生信息

## 已完成

### 一、页面基本布局

### 二、选项卡、表格信息更新和显示

## 未完成

### 1. 界面交互

### 2. 分页

### 3. 增删改查

## 作业中碰到的难题及解决：

1. 信息太过繁杂，有3各班的学生，每个班的学生各有id、姓名、年龄、性别等属性，处理起来繁琐又头晕。
解决：建立对象 所有学生->单个班的学生->单个学生的各项属性
```
=> students:{
	students_G1:{
		student:{}
	},
	students_G2:{
		student:{}
	},
	students_G3:{
		student:{}
	}
}

```
以对象的方式，信息简单明了。

2. 点击切换班级的时候，用  v-for="(v,i) in cls" v-on:click="tabIdx = i" 的方法，只能改变一个数字，但是目标是要切换 students_G1、students_G3、students_G3，怎样才能建立联系呢？
解决：建立数组，把这3个字符串包含进来。通过arr[tabIddx]的方法进行切换
3. 在根目录下创建gulpfile.js，计划监控每次作业文件夹下的public/less/*.less文件，并输出到该作业文件夹的public/stylesheets下。失败，只好在各作业文件夹下创建gulpfile.js来完成任务。
未解决！