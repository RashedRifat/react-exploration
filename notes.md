## Notes 

This is a personal document that allows me to take notes on React. 

**Properties or Props**

* Props allows you to pass in values from parents to children. However, the data is passed to the children so this.props refers to the properties of the child itself - it does not call the parent element.  
  * To do so, we just need to do key=value when creating the component div. We can then access this key within the child by using props.key. 
* Note that within the Square component, we have a button component that we define an onClick() method for. The onClick() method refers to this.props.onClick(), which references the *Square* component's onClick method(). The Square component onClick() method was defined in the Board renderSquare() method as the handleClick() method, which is the actual function that is being triggered. 
* When a component is clicked, React automatically re-renders the component that was clicked. In this manner, if the component that is being clicked gets its value from some parent class props, you can update the parent class props and see the new result on the page. 