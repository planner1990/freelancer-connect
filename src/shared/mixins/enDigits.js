export default {
  methods: {
    $enDigits(number) {
      const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return number?.toString().replace(/[۰-۹]/g, chr => {
        const enDigits = persian.indexOf(chr);
        return enDigits?.toString().replaceAll("٫", ".");
      });
    }
  }
};
