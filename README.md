# @happy-gastro/global-observables
@happy-gastro/global-observables is a module for managing observable events globally in your application. It provides methods for registering, calling, and removing observable events, allowing different parts of your application to communicate and respond to events.
## Installation
You can install @happy-gastro/global-observables via npm:
```bash
npm install @happy-gastro/global-observables
```
## Usage
To use this package, import the generateCSRAndKey function and call it with optional parameters:

```javascript
// Import the Observables module
import Observables from "@happy-gastro/global-observables"

// Register an observable event
Observables.register('eventName', (data) => {
    console.log(`Received event 'eventName' with data: ${data}`);
});

// Call the registered observable event
Observables.call('eventName', { someData: 'value' });

// Remove the registered observable event
Observables.remove('eventName');
```


## Example
```javascript
// Import the Observables module
import Observables from "@happy-gastro/global-observables"

// Register an observable event
Observables.register('showAlertWindow', (data) => {
    console.log(`Received event 'showAlertWindow' with data: ${data}`);
    alert("Received event:" + data.text)
});

// Call the registered observable event
Observables.call('showAlertWindow', { text: 'Test alert content!' });

// Remove the registered observable event
Observables.remove('showAlertWindow');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Author

This project is developed and maintained by Farkas Ferenc.

- **Name**: Farkas Ferenc
- **Email**: [ferenc.farkas@happygastro.hu](mailto:ferenc.farkas@happygastro.hu)
- **Website**: [www.happygastro.org](http://www.happygastro.org)

## Company

Happy Gastro Ltd.

## License
[MIT](https://choosealicense.com/licenses/mit/)
