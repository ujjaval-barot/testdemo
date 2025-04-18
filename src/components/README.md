# Sample Functional Component Definition

## Props

If there are any shared props, please import from the interfaces folder, and extend if neccessary.

## Definition

```javascript
import React from 'react';

interface ExampleProps {
  prop?: any;
}

export const ExampleComponent: React.FC<ExampleProps> = (): JSX.Element => {
  return <h1>Hello World</h1>;
};

ExampleComponent.displayName = 'ExampleComponent';

export default ExampleComponent;
```
