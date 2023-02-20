
# Procyon UI Library
## Quick Start Guide.

### Installation.
Run the following command to install the library in your react project:  
```
npm i --save git+ssh://git@github.com:procyonai/uxpkg.git
```

### Using icons?
Some components require icons, Procyon UI is compatible with FontAwesome icons.  
You can follow these instructions to install them in your project:
```
https://fontawesome.com/v6/docs/web/use-with/react/
```
Note that the Pro icons require setting up the license key in your project.

### Importing Components.
Import individual components before using them in your render code, like so:
```
import { IconButton } from 'procyon-ui';
```
This is how the complete code would look and this is how you would use icon components:
```
import { IconButton } from 'procyon-ui/dist/esm/components/elements/IconButton';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="App">

      <IconButton
        icon={faBookmark}
        size={'sm'}
        variant={'primary'}
      />

    </div>
  );
}

export default App;
```
Refer to each component's documentation for instructions on how to import and use them.