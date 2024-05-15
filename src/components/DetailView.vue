<template>
  <div class="detail">
    <el-button
      class="close"
      type="danger"
      :icon="CloseBold"
      size="small"
      circle
      @click="CloseWindow"
    />
    <div class="detail-content">
      <div class="groups">
        <!-- <div v-for="g in content.group" :key="g">{{ g }}</div> -->
        <div v-for="g in content.group" :key="g">
          <div v-if="typeof g === 'object'">
            <template v-for="i in props.content.group[2]" :key="i">
              <a>{{ i }}</a>
            </template>
          </div>
          <div v-else>{{ g }}</div>
        </div>
      </div>
      <el-image class="preview-img" :src="props.content.picture" fit="cover" />
      <div class="text">
        <div class="title">{{ props.content.name }}</div>
        <div class="authors">{{ props.content.authors }}</div>
        <a class="typeTitleConstructMethod"
          >ConstructMethod & Task & Application:</a
        >
        <div class="constructMethod">
          <teamplate v-for="m in props.content.constructMethod" :key="m">
            <a v-if="m.length > 0">{{ m }}</a>
            <a v-else>----</a>
          </teamplate>
        </div>
        <div class="task">
          <template v-for="m in props.content.task" :key="m">
            <a>{{ m }}</a>
          </template>
        </div>

        <div class="application">
          <template v-for="m in props.content.application" :key="m">
            <a>{{ m }}</a>
          </template>
        </div>

        <a class="publicationTitle">Publication:</a>
        <a class="publication">{{ props.content.publication }}</a>
        <a class="detailcontent" :href="props.content.url">{{
          props.content.title
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Content } from "../data/content";
import { CloseBold } from "@element-plus/icons-vue";

const props = defineProps({
  content: {
    type: Content,
  },
});

const emits = defineEmits(["close"]);

function CloseWindow() {
  emits("close");
}
</script>

<style lang="less" scoped>
.detail {
  display: inline-block;
  width: 1000px;
  height: 300px;
  background-color: rgb(238, 245, 254);
  border: solid 2px rgb(96, 98, 102);

  .close {
    position: relative;
    left: -10px;
    top: -10px;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
  }
}

.detail-content {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;

  .text {
    padding-left: 20px;
    .title {
      font-size: 30px;
      font-weight: bolder;
      left: 270px;
    }
    .authors {
      position: absolute;
      height: 42px;
      margin: 10px;
      left: 290px;
      width: 650px;
      font-size: 18px;
      line-height: 110%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all; /* break-all(允许在单词内换行。) */
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
    }
  }

  .groups {
    position: absolute;
    top: -5px;
    right: 0;
    margin-right: 7px;
    display: flex;
    div {
      background-color: rgb(138, 186, 208);
      padding: 1px;
      margin: 2px;
      border-radius: 3px;
      //line-height: 70%;

      a {
        margin: 0px 5px 0px 0px;
      }
    }
  }
}
.preview-img {
  height: 250px;
  width: 250px;
  border: solid 1px rgb(96, 98, 102);
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 2px;
}

.detailcontent {
  position: absolute;
  top: 230px;
  left: 300px;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
}
.publication {
  position: absolute;
  top: 210px;
  left: 300px;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
  word-break: break-all; /* break-all(允许在单词内换行。) */
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 1; /** 显示的行数 **/
  overflow: hidden;
}
.publicationTitle {
  position: absolute;
  top: 195px;
  left: 300px;
  font-size: 15px;
  font-weight: bolder;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
}
.typeTitleConstructMethod {
  position: absolute;
  top: 100px;
  left: 300px;
  font-size: 15px;
  font-weight: bolder;
}
.constructMethod {
  position: absolute;
  top: 120px;
  left: 300px;

  a {
    margin: 0px 8px 0px 0px;
  }
}
.task {
  position: absolute;
  top: 140px;
  left: 300px;

  a {
    margin: 0px 20px 0px 0px;
  }
}
.application {
  position: absolute;
  top: 160px;
  left: 300px;
  a {
    margin: 0px 20px 0px 0px;
  }
}
</style>