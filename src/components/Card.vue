<script setup>
import { ref } from "@vue/reactivity";
import { Content } from "../data/content";
import {paper} from "../data/paperData";
const props = defineProps({
  content: {
    type: Content,
  },
});
const emits = defineEmits(["clickCard"]);

const card = ref(null);
// console.log("paper:",paper);

function ClickCard() {
  emits("clickCard", props.content, card.value.getBoundingClientRect());
}


</script>

<template>
  <el-tooltip
    :content="content.name"
    placement="top"
    effect="light"
    :offset="10"
    :show-after="200"
    :popper-options="{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 15],
          },
        },
      ],
    }"
  >
    <div ref="card" class="card" @click="ClickCard">
      <el-image class="preview-img" :src="props.content.picture" fit="cover" />
    </div>
  </el-tooltip>
</template>

<style lang="less" scoped>
.card {
  margin: 15px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  height: 130px;
  width: 130px;

  transition: 0.5s;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}
.preview-img {
  margin: 5px;
  height: 120px;
  width: 120px;
}
</style>

