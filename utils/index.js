export const formatValue = (format, value) => {
   const type = typeof format === "string" ? format : format.type;
   const decimals = typeof format === "string" ? 2 : format.decimals;

   const transform = function (org, n, x, s, c) {
      const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
         num = org.toFixed(Math.max(0, ~~n));

      return (c ? num.replace(".", c) : num).replace(
         new RegExp(re, "g"),
         "$&" + (s || ",")
      );
   };
   switch (type) {
      case "currency":
         return !isNaN(value)
            ? `$${transform(parseFloat(value), decimals, 3, ",", ".")}`
            : value;
      case "number":
         return !isNaN(value)
            ? `${transform(parseFloat(value), decimals, 3, ",", ".")}`
            : value;
      case "percentage":
         return !isNaN(value)
            ? `${transform(parseFloat(value), decimals, 3, ",", ".")}%`
            : value;
      case "date":
         if (!value) {
            return "";
         }
         return moment(value).format("DD MMMM YYYY");
      default:
         return value;
   }
};
