export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const formatDuration = (hours: number): string => {
  if (hours < 1) {
    return `${Math.round(hours * 60)} minutes`;
  }
  if (hours < 24) {
    return `${hours} hours`;
  }
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  return remainingHours > 0
    ? `${days} days ${remainingHours} hours`
    : `${days} days`;
};
