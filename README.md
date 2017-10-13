# jQuery Temp Class

Add class only for a certain time and remove class when the certain time passes.

## Usage

Load jQuery and jQuery Temp Class.

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.temp-class.js"></script>
```

Call $(`element`).tempClass().

```js
// Add 'error' class to $('#foo'),
// and remove 'error' class from $('#foo') after 3000ms passed,
// and then output console.log('done').
$('#foo').tempClass('error', 3000, function () {
  console.log('done');
});

// Add 'error' class to $('#foo'),
// and remove 'error' class from $('#foo') after 3000ms passed.
$('#foo').tempClass('error', 3000);

// Add 'error' class to $('#foo'),
// and remove 'error' class from $('#foo') after 1000ms(default) passed.
$('#foo').tempClass('error');
```

## License

[MIT](http://www.opensource.org/licenses/mit-license)

&copy; 2017 [ktty1220](mailto:ktty1220@gmail.com)
