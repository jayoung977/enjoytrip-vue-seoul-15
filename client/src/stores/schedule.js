import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useAttrStore = defineStore("attrStore", () => {

  const userId = ref("ssafy");
  const title = ref("");
  const memo = ref("");
  const sido = ref(0);
  const startDate = ref("");
  const destDate = ref("");
  const selectedAttrList = ref([]);
  const lat = ref(0);
  const lng = ref(0);

  const getAttrList = computed(()=> selectedAttrList.value);
  // 저장
  const addToAttrList = (item) => {
    console.log("store에 추가합니다")
    console.log(item);
    selectedAttrList.value.push(item);
  };

  // const removeToAttrList = (item) => {
  //   selectedAttrList.value
  // }

  const changeStartDate = (start) => {
    startDate.value = start;
  };

  const changeDestDate = (dest) => {
    destDate.value = dest;
  };

  const setTitle = (t) => {
    title.value = t;
  };

  const setMemo = (m) => {
    memo.value = m;
  };

  const setSidoCode = (s) => {
    sido.value = s;
  }

  const getStartDate = () => {
    return startDate.value;
  };

  const getDestDate = () => {
    return destDate.value;
  };

  const getSidoCode = () => {
    return sido.value;
  }

  //   const changeMenuState = () => {
  //     menuList.value = menuList.value.map((item) => ({
  //       ...item,
  //       show: !item.show,
  //     }));
  //   };


  const getIndexes = () => {
    const indexes = ref("");
    selectedAttrList.value.forEach((item) => {
      indexes.value += item.index;
    });

    return indexes.value;
  };

  const getFullDate = () => {
    console.log(startDate.value + "-" + destDate.value);
    return startDate.value + "-" + destDate.value;
  };

  const getAttrData = () => {
    return {
      user_id: userId.value,
      title: title.value,
      memo: memo.value,
      start_date: startDate.value,
      end_date: destDate.value,
      content: getIndexes(),
    };
  };

  const getMapData = () =>{
    return {
      user_id: userId.value,
      title: title.value,
      memo: memo.value,
      content: getIndexes(),
      lag : lat.value,
      lng : lng.value
    }
  }


  return {
    selectedAttrList,
    startDate,
    destDate,
    getAttrList,
    getFullDate,
    getMapData,
    getSidoCode,
    addToAttrList,
    changeStartDate,
    changeDestDate,
    getStartDate,
    getDestDate,
    getAttrData,
    setTitle,
    setMemo,
    setSidoCode
  };
});

// export default mapCursorStore = defineStore("cursorStore", ()=>{

//   const stations = ref([]);
//   const selectedStations = ref([])

//   const getStations = ()=>{
//     return stations.value;
//   }

//   const getSelectionStations = ()=>{
//     return stations.value;
//   }

//   const setStation = (station) => {
//     stations.value.push(station);
//   }

//   const setSelectedStation = (station) => {
//     stations.value.push(station);
//   }

  

//   return {

//   }

// })