# Event-constructor-polyfill.js
Polyfill Event constructor for Internet Explorer 11

## How to use it?

Import the Event-constructor-polyfill.js JavaScript library wherever you want into the document before using it.

``` html
<script src="Event-constructor-polyfill.min.js"></script>
<script>
    const event = new Event('build');
  
    let elem = document.getElementById('my-element');

    // Listen for the event.
    elem.addEventListener('build', function(e) { /* ... */ }, false);

    // Dispatch the event.
    elem.dispatchEvent(event);
</script>
```

## Authors

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/erovas/Event-constructor-polyfill.js/blob/main/LICENSE) file for details.
