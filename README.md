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
## How it works
The plugin finds all elements in `body`.
When the element is clicked a `timeout` is started. When the `timeout` ends the `longpress` event will be triggered on the element.

If the press or click is stopped before the `timeout` the `longpress` event will not be triggered.
```javascript
$(document).ready(function(){
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
});
```