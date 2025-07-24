<template>
  <div>
    <button class="consoleLog" @click="consoleLog">Log Console</button>
    <button class="consoleWarn" @click="consoleWarn">Log Warning</button>
    <button class="consoleError" @click="consoleError">Log Error</button>
    <button class="consoleTable" @click="consoleTable">Log Table</button>
    <button class="consoleCustomLog" @click="consoleCustomLog">Custom Log</button>
  </div>
</template>

<script setup lang="ts">


function consoleLog() {
  console.log('Hello, Console!')
}
function consoleWarn() {
  console.warn('Hello, Warning!')
}
function consoleError() {
  console.error('Hello, Error!')
}
function consoleTable() {
  console.table([{
    name : 'ali',
    family : 'ghaderi',
    age : 34
  },
    {
      name : 'ahad',
      family : 'karimi'
    },
    {
      name : 'majid',
      statis : 'active'
    }])
}
function consoleCustomLog(){
  const spacing = '5px'
  const style = `padding: ${spacing}; background-color: blue; color: yellow; font-weight: bold;`
  console.log('%cHello, Custom Log!', style)
}
</script>

<style scoped>
.consoleLog, .consoleWarn, .consoleError, .consoleTable , .consoleCustomLog
{
  background-color: blue;
  color: white;
  border: 1px solid black;
  height: 30px;
  width: 90px;
  margin: 5px;
}
</style>
