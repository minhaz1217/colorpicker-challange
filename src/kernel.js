export const kernelFunction = function (width, height, hue) {
  const imageSize = width * height;
  const imageDataLength = imageSize * 4;
  const i = this.thread.x;

  const y = Math.floor(i / (height * 4));
  const x = Math.floor(i / 4 - y * width);
  const channel = i % 4;

  const h = hue * 360,
    s = x / width,
    v = 1 - y / height;

  const C = v * s;
  const X = C * (1 - (Math.abs((h / 60) % 2) - 1));
  const M = v - C;

  const r = 0,
    g = 0,
    b = 0;
  if (h < 60) {
    r = C;
    g = X;
    b = 0;
  } else if (h < 120) {
    r = X;
    g = C;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = C;
    b = X;
  } else if (h < 240) {
    r = 0;
    g = X;
    b = C;
  } else if (h < 300) {
    r = X;
    g = 0;
    b = C;
  } else {
    r = C;
    g = 0;
    b = X;
  }

  if (channel === 0) {
    // this is the red channel
    return (r + M) * 255;
  } else if (channel === 1) {
    // this is the green channel
    return (g + M) * 255;
  } else if (channel === 2) {
    // this is the blue channel
    return (b + M) * 255;
  } else {
    // this is the alpha channel
    return 255;
  }
};
