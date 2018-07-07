# fxf-uis

### 说明

这是一个组件测试包

### 安装

```
npm install fxf-uis
```

### 使用

#### 按钮

**颜色**

```html
<Button type="info">信息</Button>
<Button type="success">成功</Button>
<Button type="warning">警告</Button>
<Button type="error">错误</Button>
```

**大小**

```html
<Button size="large">大按钮</Button>
<Button>默认按钮</Button>
<Button size="small">小按钮</Button>
```

**禁用按钮**

```html
<Button>默认按钮</Button>
<Button disabled>禁用按钮</Button>
```

#### 开关

**大小**

```html
<iSwitch size="small"></iSwitch>
<iSwitch></iSwitch>
<iSwitch size="large"></iSwitch>
```

**文字**

```html
<iSwitch>
  <span slot="open">开</span>
  <span slot="close">关</span>
</iSwitch>
<iSwitch>
  <span slot="open">on</span>
  <span slot="close">off</span>
</iSwitch>
<iSwitch size="large">
  <span slot="open">开启</span>
  <span slot="close">关闭</span>
</iSwitch>
```

**禁用**

```hmtl
<iSwitch disabled></iSwitch>
```

#### 选择器

```html
<Select></Select>
```