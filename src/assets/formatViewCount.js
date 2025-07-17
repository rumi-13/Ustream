// Format view count for better readability; ex. 2M Views
const formatViewCount = (count) => {
  if (!count) return "0 views";
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M `;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K `;
  }
  return `${num}`;
};

export default formatViewCount;
