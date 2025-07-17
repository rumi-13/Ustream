//Formatting Date : ex; 2 days ago
export default function formatDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const seconds = diffMs / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = days / 365;

  if (years >= 1)
    return `${Math.floor(years)} year${years >= 2 ? "s" : ""} ago`;
  if (months >= 1)
    return `${Math.floor(months)} month${months >= 2 ? "s" : ""} ago`;
  if (days >= 1) return `${Math.floor(days)} day${days >= 2 ? "s" : ""} ago`;
  if (hours >= 1)
    return `${Math.floor(hours)} hour${hours >= 2 ? "s" : ""} ago`;
  if (minutes >= 1)
    return `${Math.floor(minutes)} minute${minutes >= 2 ? "s" : ""} ago`;
  return "just now";
}
