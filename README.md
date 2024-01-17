# Purpose
This is an example OA.

The purpose of this is to generate a color picker.

Write your code ONLY in the `src/kernel.js` file.

# Task

The purpose of this challenge is to make the image like so. When we move the slider the canvas should change like this image.

![Final output](task_images/task.gif)

# Steps on how to get started
* Go [here](https://github.com/minhaz1217/colorpicker-challenge/tree/base-code) and download/clone the branch.
* Unzip the project
* Go to the project directory
* Run the command `npm run dev`
* The canvas should be blank
* Paste these in the end of the `src/kernel.js`
  ```
    if (channel === 0) {
        // this is the red channel
        return 255;
    } else if (channel === 1) {
        // this is the green channel
        return 0;
    } else if (channel === 2) {
        // this is the blue channel
        return 0;
    } else {
        // this is the alpha channel
        return 255;
    }
  ```
* After the project should auto reload. And the canvas should show red.
* Notice that we are outputting 255 in the red channel.
* For every pixel in the canvas this function will be called 4 times for each of the channel RGBA.
* The hue value should be between 0 and 1 depending on the scroll bar.
* Now write code ONLY in the kernel.js file
   
### **Use chrome only, this doesn't work properly in firefox**
   