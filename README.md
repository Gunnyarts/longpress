# longpress
An event listener for longpressing elements
## How to use
Add the plugin in the header.
```html5
<script src="path/to/jquery.longpress.js"></script>
```
Then add the event to a jQuery selector.
```javascript
$(".trigger").on("longpress", function(){
	// Your actions here
});
```
[Demo](http://gunnyarts.github.io/longpress/demo/)

### Prevent mobile link context popup
You can call the function `preventContext` on the links you are longpressing
```javascript
$('.trigger').on('load', preventContext);

```
This will prevent the context popup from appearing on the page where this function is called. This should only be used when necessary, as it will prevent your users from opening links in new tabs, save images, etc. on mobile devices.

This will only prevent the link context popup from appearing; the user can still highlight and copy normal text on the page.
## How it works
The plugin finds all elements in `body`.
When the element is clicked a `timeout` is started. When the `timeout` ends the `longpress` event will be triggered on the element.

If the press or click is stopped before the `timeout` the `longpress` event will not be triggered.
```javascript
$('body').find('*').each(function(){
	var self = $(this);
	self.on('mousedown', function(){
		var timeout = setTimeout(function(){
			self.trigger('longpress');
		}, 500)
		self.on('mouseup', function(){
			clearTimeout(timeout);
		});
	});
});
```