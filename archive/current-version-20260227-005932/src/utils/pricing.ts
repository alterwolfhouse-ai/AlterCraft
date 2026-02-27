export const formatInr = (value: number) => {
  return `INR ${Math.round(value).toLocaleString('en-IN')}`;
};

export const applyDiscount = (value: number, discount: number) => {
  return Math.round(value * (1 - discount));
};
