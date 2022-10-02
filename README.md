# Grada UI

It's a UI kit for applications base in React like  `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`

## Install

npm command line

```bash
npm install grada-ui
```
yarn command line
```bash
yarn add grada-ui
```

### Before to use

Import the styles to use correctly, keep in mind that the library use `scss`, import the main sass style into the root file.

`glogal.scss`

```scss
@import "grada-ui/src/sass/main.scss";
```

`app.jsx|tsx`
```js
import "grada-ui/src/sass/main.scss";
```

### Example

Please try to follow the next steps:

`index.tsx`
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "grada-ui/src/sass/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`app.tsx`
```tsx
import { Button } from "grada-ui";

function App() {
  return (
    <div className="App">
      <Button label="Primary Button" />
      <Button variant label="Secondary or Variant Button" />
    </div>
  );
}

export default App;

```

