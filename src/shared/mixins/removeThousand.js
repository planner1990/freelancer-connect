export default {
  methods: {
    $removeThousand(value) {
      const str = value?.toString();
      return str.replace(/,/gi, "");
    }
  }
};
