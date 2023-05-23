export const moneyFormatter = (money) => {
  return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
