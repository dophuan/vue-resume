import Vue from "vue";

export default Vue.extend({
  methods: {
    checkValue(value: unknown): boolean {
      if (
        value === null ||
        value === undefined ||
        value === "" ||
        value === "null" ||
        value === "undefined"
      ) {
        return false;
      }
      return true;
    },
    getValueFromAttr(
      item: never,
      attr: string,
      defaultValue: unknown
    ): unknown {
      if (!this.checkValue(item) || !this.checkValue(attr)) {
        return defaultValue || null;
      }
      if (attr.indexOf(".") > -1) {
        const arrs = attr.split(".");
        const result = item;
        for (let i = 0; i < arrs.length; i++) {
          const idx = arrs[i];
          const value = result[idx];
          if (!this.checkValue(value)) {
            return defaultValue || null;
          }
        }
        return result;
      }
      return item[attr];
    },
  },
});
