# html-comboBox (select)

Creates a toggle button equivalent to input type checkbox or radio

```javascript
const combobox = comboBox({
  spead: 2, //min 1 max any. Greater value fater opening animation. See in demo
  height: 30, //height of option
  maxheight: 300 //max height of option container.
});
```

## options - comboBox

* **spead** number (spead of animation of opening select options)
* **height** number (height of option)
* **width** number (width of option)
* **maxheight** number (max height of option container)
* **select** Element (Select element from DOM)

## Methods - comboBox

* **addOption** function:*public*
* **removeOption** function:*public*
* **setvalue** funtion:*public*
* **value** function:*public*
