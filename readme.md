- Live Link :https://rakibhasan1868.github.io/B12-A5-Emergency-Hotline/

---

# Answers to All Questions:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- *getElementById(id)*  
  - Finds an element by its specific id.  
  - Returns only a single element.  

- *getElementsByClassName(className)*  
  - Finds multiple elements by a specific class name.  
  - You need to use a loop to work with each element.  
  - Returns all elements as an HTMLCollection.  

- *querySelector(cssSelector)*  
  - Returns only the *first matched element*.  
  - Finds an element using a CSS selector.  

- *querySelectorAll(cssSelector)*  
  - Finds all elements using a CSS selector.  
  - Returns all elements as a NodeList.  
  - Can be easily iterated using forEach().  

---

## 2. How do you create and insert a new element into the DOM?

- Use **document.createElement()** to create a new element.  
- Then insert it into the DOM using **appendChild()**, **append()**, **prepend()**, or **insertBefore()**.  

---

## 3. What is Event Bubbling and how does it work?

- *Event Bubbling* is a part of DOM event propagation.  
- When an event occurs on a child element, the event first triggers on that child, then bubbles up to its parent, and continues upward to other ancestors.  
- The event moves *from bottom to top like a bubble*.  

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- *Event Delegation* means placing an event listener on a parent element so that events from its child elements can be handled together.  
- Because of *Event Bubbling*, the child’s event reaches the parent, allowing us to control child events through the parent.  

*Why useful?*  
- Only one listener can handle many child elements.  
- Improves performance and keeps code cleaner.  
- Works for dynamically created child elements.  

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- *preventDefault()*  
  - Stops the default behavior of an element.  
  - Example: Prevents a form from submitting or a link from reloading the page.  

- *stopPropagation()*  
  - Stops the propagation of an event.  
  - Meaning the event will no longer bubble up (child → parent) or capture down (parent → child).  

---
