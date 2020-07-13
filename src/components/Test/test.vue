<template>
    <div class="back">
        <el-button @click="getTest">加油</el-button>
    </div>
</template>

<script>
import { click } from './test'
export default {
  methods: {
    getTest () {
      click()
    }
  }
}
</script>

<style src="./test.css"/>
