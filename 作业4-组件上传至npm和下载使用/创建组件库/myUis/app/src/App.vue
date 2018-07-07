<template>
  <div id="app">
    <!-- 按钮 -->
    <h3>颜色/类型</h3>
    <Button type="info">信息</Button>
    <Button type="success">成功</Button>
    <Button type="warning">警告</Button>
    <Button type="error">错误</Button>
    <h3>大小</h3>
    <Button size="large">大按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">小按钮</Button>
    <h3>禁用按钮</h3>
    <Button>默认按钮</Button>
    <Button disabled>禁用按钮</Button>
    <!-- 开关 -->
    <h3>大小</h3>
    <iSwitch size="small"></iSwitch>
    <iSwitch></iSwitch>
    <iSwitch size="large"></iSwitch>
    <h3>文字</h3>
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
    <h3>禁用</h3>
    <iSwitch disabled></iSwitch>
    <!-- 选择器 -->
    <h3>选择器</h3>
    <Select></Select>
  </div>
</template>

<script>



export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
