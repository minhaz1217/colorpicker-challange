export const kernelFunction = function (width, height, hue) {
  const imageSize = width * height;
  const imageDataLength = imageSize * 4;
  const i = this.thread.x;

  const y = Math.floor(i / (height * 4));
  const x = Math.floor(i / 4 - y * width);
  const channel = i % 4;
  const xRangeChangedValue = 255 - (x * 255) / width;
  const yRangeChangedValue = 255 - (y * 255) / height;

  if (channel === 0) {
    // this is the red channel
    return yRangeChangedValue;
  } else if (channel === 1) {
    // this is the green channel
    return xRangeChangedValue - (y * 255) / height;
  } else if (channel === 2) {
    // this is the blue channel
    return xRangeChangedValue - (y * 255) / height;
  } else {
    // this is the alpha channel
    return 255;
  }
};