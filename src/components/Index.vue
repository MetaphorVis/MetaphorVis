<script setup>
import { computed, reactive, ref, toRaw } from "vue";
import { Content } from "../data/content";
import { Search, Aim } from "@element-plus/icons-vue";
import CardView from "./Card.vue";
import DetailView from "./DetailView.vue";
import { paper } from "../data/paperData";

const data = reactive({
  content: [],
  filters: ["", "", ""],
  show_detail: false,
  detail_window: {
    x: 0,
    y: 0,
  },
  flag: [1, 1, 1],
  current_content: null,

  options: [
    {
      value: "选项0",
      label: "All",
    },
    {
      value: "选项1",
      label: "Relational",
    },
    {
      value: "选项2",
      label: "Structured",
    },
    {
      value: "选项3",
      label: "Spatiotemporal",
    },
    {
      value: "选项4",
      label: "Unstructured",
    },
    {
      value: "选项5",
      label: "Field",
    },
  ],
  selectedValue: "",
  ifSearch: false,
  inputValue: "",
});

data.content = paper;

const show_cards = computed(() => {
  {//搜索
  if (data.ifSearch) 
    return data.content.filter((d) => {
      for (const key in d) {
        if (Object.hasOwnProperty.call(d, key)) {
          const element = d[key];
          //console.log(typeof(element),key,element)
          if (typeof element === "string") {
            let reg = new RegExp(`.*${data.inputValue}.*`, "i");
            // if(element.includes(data.inputValue))return true;
            if (reg.test(element)) {
              return true;
            }
          }
          //else {console.log(key,element);return false;}
          else if (typeof element === "object") {
            console.log(typeof element, key, element);
            //return false;
            for (let index = 0; index < element.length; index++) {
              const item = element[index];
              let reg = new RegExp(`.*${data.inputValue}.*`, "i");
              if (reg.test(element.toString())) {
                return true;
              }
            }
          }
        }
      }
    });
  }
  //筛选
  if (data.filters.join("") === "") {
    //如果没有选中筛选器
    return paper;
  } else {
    //如果有筛选
    //console.log("选中：", data.filters); //初始data.filters["","",""]
    return data.content.filter((d) => {
      //开始筛选
      for (let i = 0; i < data.filters.length; i++) {
        const filter = data.filters[i]; //
        //console.log("filter:",filter)
        if (filter == "All") {
          console.log(i, filter);
          data.flag[i] = 1;
        } else if (filter !== "") {
          //console.log("filter:", filter);
          if (typeof filter == "object") {
            if (d.group[2].includes(data.selectedValue)) {
              //测试筛选数据类型为Text
              return true;
            } else return false;
          } else {
            if (d.group.find((d) => d === filter) === undefined) {
              return false;
            }
          }
        }
      }
      if (((data.flag[1] === 1 || data.flag[2]) === 1 || data.flag[0]) === 1)
        return true;
    });
  }
});

// 定义筛选器
function Filter(filter_index, condition) {
  if (filter_index != 2) data.filters[filter_index] = condition;
  else {
    data.filters[filter_index] = [condition];
  }
}

function ContainedFilter(filter_index, condition) {
  return data.filters[filter_index].includes(condition);
}

function SelectData(selectValue) {
  console.log(selectValue);
  data.selectedValue = selectValue;
  Filter(2, selectValue);
}

function search(inputvalue) {
  if (data.inputValue != "") data.ifSearch = true;
  else data.ifSearch = false;
}

const detailView = ref(null);
function ShowDetailWindow(content, card_rect) {
  // data.detail_window.x = card_rect.x - card_rect.width * 2;
  // data.detail_window.y = card_rect.y + card_rect.height / 2 ;

  // let w = window.innerWidth;
  // if (data.detail_window.x <= 0) {
  //   data.detail_window.x = 0;
  // }
  // if (data.detail_window.x + 1000 >= w) {
  //   data.detail_window.x = w - 1000;
  // }

  data.show_detail = true;
  data.current_content = content;
}
</script>

<template>
  <div class="index">
    <div class="header">
      <div class="title-row"><div>Metaphor Vis</div></div>
      <div class="function-row">
        <div class="function-group">
          <div>MetaphorTypes</div>
          <el-tooltip class="item" effect="light" content="All" placement="top">
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'All')"
              :disabled="ContainedFilter(0, 'All')"
            >
              <!-- 第一组：隐喻类型：形式隐喻、交互隐喻 
              选中All (0：是group第一个维度，"All":名字叫All)-->

              <svg
                t="1653363932434"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4125"
                width="20"
                height="20"
              >
                <path
                  d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320z"
                  p-id="4126"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="light"
            content="Form"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'Form')"
              :disabled="ContainedFilter(0, 'Form')"
            >
              <!-- 形式隐喻Form 选中Form (0：是group第一个维度，"Form":形式隐喻)-->

              <svg
                t="1653363717310"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="50974"
                width="20"
                height="20"
              >
                <path
                  d="M673 74c0 29.271-23.729 53-53 53L409 127c-29.271 0-53-23.729-53-53L356 53c0-29.271 23.729-53 53-53l211 0c29.271 0 53 23.729 53 53L673 74z"
                  p-id="50975"
                  fill="#ffffff"
                ></path>
                <path
                  d="M908.737 1021 121.412 1021c-45.912 0-83.263-37.352-83.263-83.264L38.149 125.263C38.148 79.352 75.5 42 121.412 42L259 42c17.673 0 32 14.327 32 32s-14.327 32-32 32L121.412 106c-10.622 0-19.263 8.642-19.263 19.263l0 812.473c0 10.622 8.642 19.264 19.263 19.264l787.326 0c10.621 0 19.263-8.642 19.263-19.264L928.001 125.263c0-10.622-8.642-19.263-19.263-19.263L768 106c-17.673 0-32-14.327-32-32s14.327-32 32-32l140.737 0C954.648 42 992 79.352 992 125.263l0 812.473C992 983.648 954.648 1021 908.737 1021z"
                  p-id="50976"
                  fill="#ffffff"
                ></path>
                <path
                  d="M764 351 263 351c-17.673 0-32-14.327-32-32s14.327-32 32-32l501 0c17.673 0 32 14.327 32 32S781.673 351 764 351z"
                  p-id="50977"
                  fill="#ffffff"
                ></path>
                <path
                  d="M764 544 263 544c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32l501 0c17.673 0 32 14.327 32 32C796 529.673 781.673 544 764 544z"
                  p-id="50978"
                  fill="#ffffff"
                ></path>
                <path
                  d="M764 737 263 737c-17.673 0-32-14.327-32-32s14.327-32 32-32l501 0c17.673 0 32 14.327 32 32S781.673 737 764 737z"
                  p-id="50979"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>
          <!-- 交互隐喻 Interaction  (0：是group第一个维度，"Interaction":形式隐喻-->
          <el-tooltip
            class="item"
            effect="light"
            content="Interaction"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'Interaction')"
              :disabled="ContainedFilter(0, 'Interaction')"
            >
              <svg
                t="1653363791481"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="51150"
                width="20"
                height="20"
              >
                <path
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-0.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7z m-4.2 134.9l109.1 85.7c4.4 3.5 10.9 0.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"
                  p-id="51151"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>
        </div>

        <!-- 第2组：映射种类 ： 自然景观Z  人造实体R  非实体F  动作D  可视化启发K -->
        <div class="function-group">
          <div>MappingTypes</div>
          <!-- all -->
          <el-tooltip class="item" effect="light" content="All" placement="top">
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'All')"
              :disabled="ContainedFilter(1, 'All')"
            >
              <!-- 第一组：隐喻类型：形式隐喻、交互隐喻 
              选中All (0：是group第一个维度，"All":名字叫All)-->

              <svg
                t="1653363932434"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4125"
                width="20"
                height="20"
              >
                <path
                  d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320z"
                  p-id="4126"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <!-- 自然景观Z -->
          <el-tooltip
            class="item"
            effect="light"
            content="Natural Landscape"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'Z')"
              :disabled="ContainedFilter(1, 'Z')"
            >
              <svg
                t="1653362726968"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="49987"
                width="20"
                height="20"
              >
                <path
                  d="M192 384a160 160 0 1 0-160-160 160 160 0 0 0 160 160z m246.72 277.76a48 48 0 0 1-87.68-38.4c8.64-21.44 17.6-41.28 26.24-60.8C187.52 344.64 32 960 32 960h960c-140.16-583.04-333.44-848-553.28-298.24z"
                  fill="#ffffff"
                  p-id="49988"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <!-- 人造实体R -->
          <el-tooltip
            class="item"
            effect="light"
            content="Man-made"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'R')"
              :disabled="ContainedFilter(1, 'R')"
            >
              <svg
                t="1653362981483"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="50297"
                width="20"
                height="20"
              >
                <path
                  d="M733.038 316.588c82.239 36.23 166.023-46.896 129.55-129.553-12.29-27.863-37.621-51.158-79.935-57.884h-19.298c-37.677 6.194-65.006 28.594-77.182 52.373-27.769 54.263 4.889 116.569 46.865 135.064zM596.594 436.488c13.691-14.402 25.01-38.684 26.188-62.018 3.206-63.634-49.057-108.549-107.502-101.988h0.002c-51.199 5.747-88.206 41.421-88.206 96.473 0 87.33 110.929 129.175 169.518 67.533zM625.539 537.099c26.149 94.777 170.224 92.606 190.194-5.517 13.714-67.357-38.094-124.779-106.122-117.143l0.004-0.002c-11.517 1.294-24.645 4.118-33.083 8.27-32.383 15.92-65.74 60.93-50.993 114.392z"
                  p-id="50298"
                  fill="#ffffff"
                ></path>
                <path
                  d="M906.549 627.144s-283.69 103.455-335.413 97.796c-51.723-5.658-165.578-46.398-168.865-55.53-3.285-9.131 4.799-51.959 41.168-36.606 36.37 15.354 126.078 42.834 142.245 37.984 16.167-4.848 44.458-43.303 23.441-64.084-21.017-20.778-143.058-98.37-177.003-118.575-33.945-20.204-107.492-57.382-172.15-29.903-64.659 27.479-169.291 85.671-169.291 85.671V848.6s112.586-46.141 250.922 0c138.336 46.139 222.263 59.812 274.796 41.219s287.726-147.905 309.548-179.425c21.821-31.523-19.398-83.25-19.398-83.25z"
                  p-id="50299"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <!-- 非实体F -->
          <el-tooltip
            class="item"
            effect="light"
            content="Non-physical"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'F')"
              :disabled="ContainedFilter(1, 'F')"
            >
              <svg
                t="1653363178561"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="50466"
                width="20"
                height="20"
              >
                <path
                  d="M249.6 902c-21.7 0-44.7-1.3-68.6-3.8l3.2-46c21.4 2.3 42.1 3.4 61.6 3.4 140.1 0 212.9-59.7 283.3-117.5C607.5 673.9 688.3 607.5 843 601l-3.2 46.1c-130.8 7.7-201.6 65.6-270 121.7C486.2 837.5 407.6 902 249.6 902z"
                  p-id="50467"
                  fill="#ffffff"
                ></path>
                <path
                  d="M241.1 782.4c-19.1 0-39.3-1-60.1-2.9l3.2-45.9c18.5 1.7 36.4 2.6 53.4 2.6 140.3 0 213-59.8 283.3-117.6 79.7-65.3 162-132.9 322.1-137.6l-3.2 46.2c-136.4 5.7-208.6 64.8-278.4 122-83.4 68.6-162 133.2-320.3 133.2z"
                  p-id="50468"
                  fill="#ffffff"
                ></path>
                <path
                  d="M233.1 662.8c-16.6 0-34.1-0.7-52-2.2l3-45.9c15.4 1.2 30.5 1.9 44.9 1.9 140.5 0 213.3-59.8 283.6-117.6 81.1-66.5 164.8-135.2 330.3-137.7l-3.1 46.1c-141.4 3.6-215 63.7-286.2 122l-0.7 0.6c-83.2 68.3-161.8 132.8-319.8 132.8z"
                  p-id="50469"
                  fill="#ffffff"
                ></path>
                <path
                  d="M224.9 543.2c-14.1 0-28.9-0.5-44-1.6l3.2-46c12.7 0.9 25.1 1.3 37.1 1.3 140.3 0 212.9-59.7 283.1-117.5C586.8 311.9 672 242 842.9 241.7l-3 45.9c-147.2 1.5-222.4 63-295.1 122.5-83.3 68.6-161.8 133.1-319.9 133.1z"
                  p-id="50470"
                  fill="#ffffff"
                ></path>
                <path
                  d="M216.5 423.7c-11.5 0-23.4-0.4-35.5-1.1l3.2-45.9c9.7 0.5 19.3 0.8 28.6 0.8 140.4 0 213.1-59.8 283.3-117.6C578.9 192 664.4 122 836.3 122h6.7l-3.2 45.9h-2.7c-150.6 0-226.6 62.1-300.1 122.2l-0.7 0.6c-83.1 68.4-161.7 133-319.8 133z"
                  p-id="50471"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <!-- 动作D -->
          <el-tooltip
            class="item"
            effect="light"
            content="Action"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'D')"
              :disabled="ContainedFilter(1, 'D')"
            >
              <svg
                t="1653363237923"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="50638"
                width="20"
                height="20"
              >
                <path
                  d="M826.688 529.728l-452.224 301.504a21.312 21.312 0 0 1-33.152-17.728V210.496a21.312 21.312 0 0 1 33.152-17.728l452.224 301.44a21.312 21.312 0 0 1 0 35.52z"
                  p-id="50639"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>

          <!-- 可视化启发 -->
          <el-tooltip
            class="item"
            effect="light"
            content="Visualization Inspiration"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'K')"
              :disabled="ContainedFilter(1, 'K')"
            >
              <svg
                t="1653363286830"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="50806"
                width="20"
                height="20"
              >
                <path
                  d="M125.390132 478.965681H34.52978c-19.041058 0-34.478373 15.386197-34.478372 34.376139a34.503931 34.503931 0 0 0 34.478372 34.427255H125.415691a34.503931 34.503931 0 0 0 34.478372-34.427255 34.452814 34.452814 0 0 0-34.503931-34.376139z m118.131237-234.192238c13.750456-13.085935 14.312742-34.887308 1.175689-48.612205L182.002138 130.603769a34.580607 34.580607 0 0 0-48.791115-1.150131 34.299463 34.299463 0 0 0-1.124572 48.612205l62.746037 65.531911a34.503931 34.503931 0 0 0 48.688881 1.175689z m298.804043 712.723425h-60.70136c-18.68324 0-33.839411 15.18173-33.839411 33.788294 0 18.632123 15.156171 32.68928 33.839411 32.68928h60.70136c18.657681 0 33.839411-14.057157 33.839411-32.68928 0-18.657681-15.18173-33.788294-33.839411-33.788294z m445.560764-477.559965h-90.809235c-19.117734 0-34.555048 15.386197-34.555048 34.325021a34.503931 34.503931 0 0 0 34.555048 34.452815h90.809235a34.503931 34.503931 0 0 0 34.503931-34.452815 34.427256 34.427256 0 0 0-34.503931-34.325021z m-476.409834-285.845901c-172.979708 0-313.167902 149.823736-313.167902 322.2156 0 125.4154 74.170673 233.553276 181.158418 283.238936v84.368502c0 16.766355 15.437314 31.334681 34.478372 31.334681 0.613403 0 1.17569 0 1.789093-0.051117a22.108074 22.108074 0 0 0 1.865768 0.051117h187.726944c5.904006 0 11.450193-1.201248 16.306302-3.450393 12.242506-4.6772 20.830151-15.386197 20.830151-27.884288v-83.908449c107.524473-49.481193 182.155198-157.874654 182.155198-283.673431 0.025558-172.391863-140.213753-322.241158-313.142344-322.241158z m62.694921 549.02144v80.023562c0 3.194808-0.230026 6.031798-0.66452 8.51097v19.066616h-125.08314v-17.712018a64.688481 64.688481 0 0 1-0.638962-9.865568v-80.279146c-99.345763-27.730937-172.187395-118.616848-172.187395-226.550256 0-129.888132 105.607588-245.105703 235.879096-245.105703 130.24595 0 235.82798 115.217571 235.82798 245.105703 0 108.291227-73.327243 199.432722-173.133059 226.80584zM895.134498 130.75712a34.580607 34.580607 0 0 0-48.765556 0l-64.253988 64.075078a34.35058 34.35058 0 0 0 0 48.612205 34.580607 34.580607 0 0 0 48.765556 0.025558l64.305105-64.049519a34.503931 34.503931 0 0 0-0.051117-48.663322z m-384.118208 30.235667c19.0155 0 34.452814-15.386197 34.452814-34.350581V36.037439a34.503931 34.503931 0 0 0-68.982304 0v90.604767c0 18.989941 15.51399 34.35058 34.52949 34.350581z"
                  p-id="50807"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-button>
          </el-tooltip>
        </div>

        <!-- 第3组：数据类型 ： 13种 -->
        <div class="function-group">
          <div>DataTypes</div>
          <el-select v-model="data.options.value" placeholder="Please select">
            
            <el-option
              v-for="item in data.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click="SelectData(item.label)"
            >
              <span style="float: left">{{ item.label }}</span>
              
            </el-option>
          </el-select>
        </div>

        <div class="function-group">
          <div>Fulltext Search</div>
          <el-input
            clearable
            :suffix-icon="Search"
            v-model="data.inputValue"
            @change="search(data.inputValue)"
            size="small"
          ></el-input>
        </div>

        <div class="function-group">
          <div>Techniques Shown</div>
          <div
            style="
              margin-top: -10px;
              font-size: 35px;
              font-weight: bolder;
              text-align: center;
            "
          >
            {{ show_cards.length }}
            <!-- 173 -->
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="gallery">
        <div v-for="c in show_cards" :key="c.id">
          <card-view @clickCard="ShowDetailWindow" :content="c"></card-view>
        </div>
      </div>
    </div>

    <div class="detail-window" v-if="data.show_detail">
      <detail-view
        ref="detailView"
        @close="data.show_detail = false"
        :content="data.current_content"
      ></detail-view>
    </div>
  </div>
</template>

<style lang="less">
.index {
  height: 100vh;
  .header {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    .title-row {
      background-color: rgb(72, 124, 198);
      height: 60px;
      padding: 10px 20px 10px 10px;
      font-size: 40px;
      font-weight: bolder;
      color: white;
      display: flex;
      justify-content: center;
    }

    .function-row {
      width: 100%;
      height: 95px;
      background-color: rgb(203, 225, 252);
      border-bottom: solid 2px rgb(96, 98, 102);
      display: flex;
      justify-content: center;

      .function-group {
        font-size: 18px;
        margin: 10px 20px 10px 20px;
        text-align: center;
        div {
          margin-bottom: 10px;
        }
      }
    }
  }

  .content {
    position: absolute;
    top: 175px;
    width: 100%;

    .gallery {
      padding: 10px 30px 10px 30px;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }
  }
}

.detail-window {
  position: fixed;
  top: 25vh;
  left: 20vw;
  // height: 25vh;
  z-index: 10;
}

.function-group {
  .el-button {
    width: 1px !important;
  }
}
</style>
