const { createApp, ref } = Vue;
createApp({
  setup() {
    const content = ref("");
    const currentVals = ref("");
    const input = ref("");
    const i = ref(0);
    const timeout = ref(null);

    function commit() {
      content.value += input.value;
      input.value = "";
      i.value = 0;
    }

    function press(vals) {
      if (currentVals.value !== vals) {
        currentVals.value = vals;
        commit();
      }
      if (i.value >= vals.length) i.value = 0;

      input.value = vals[i.value];
      i.value += 1;

      clearTimeout(timeout.value);
      timeout.value = setTimeout(commit, 1000);
    }

    return {
      content,
      input,
      press,
    };
  },
}).mount("#app");
