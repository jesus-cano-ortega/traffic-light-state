# <img src="https://github.com/jesus-cano-ortega/js-introduction-exercises/blob/main/assets/resources/img/face.png" width="45" alt="Personal Logo"> Traffic Lights with React

<p>
  <a href="https://aqua-worm-y2ai5nof.ws-eu17.gitpod.io/"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>



The objective of this project is to display a dynamic traffic lights that changes the glow when click on one of the lights. This is a simple project designed to put in practice 
the React skills learned and the use of Hooks (useState), so we can improve the hability to work with components and the files structure of a framework.

React improves the creation of custom components, which you can render throughout your web-app using the ReactDOM.render() method. A custom component allows you to divide and conquer, separating logical and visual challenges into smaller pieces- giving you greater control over the display and functionalities of each part of the web-app you are developing.

### Instructions

1. First, simulate a traffic light using css (.scss).
2. The light has to glow when clicked.
3. The whole purpose of the component is displaying a traffic light with red, yellow and green lights.
4. When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
5. The component must have a hooked state variable that tracks the color: const [color, setColor] = useState("red");
6. Use the setColor function to change the color an the component will automatically re-render (because it's hooked with useState).
7. Use the ReactDOM.render to render the component into the DOM.

##### REMEMBER: 

Once the progress and flow of the project is finished, you must commit and push the repository remotely, using the following command:

```
$ git add . 
$ git commit -m "Message"
$ git push origin repo-remote
```

This template is similar to create-react-app but it's meant for 4Geeks Academy students.

##### and install the npm package:
```
$ npm install
```
## Start coding!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
```
$ npm run start
```

You can update the `styles/index.scss` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.