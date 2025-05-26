export function formatNiceDate(dateInput: string | Date): string {
  const date = new Date(dateInput);

  const datePart = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timePart = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${datePart} at ${timePart}`;
}

export function generateShortOrderId(prefix = "ORD", length = 8) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomPart = "";

  for (let i = 0; i < length; i++) {
    randomPart += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return `${prefix}-${randomPart}`;
}
