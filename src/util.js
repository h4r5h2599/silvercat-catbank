export const isCloserToBlack = (hex) => {
  // Remove the hash symbol if present
  hex = hex.replace("#", "");

  // Convert the hex string to RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the relative luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Return true if luminance is closer to black (i.e., less than 128)
  return luminance < 128;
};

export const hexToRgb = (hex) => {
  hex = hex.replace("#", "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
