function preventContext(){
	window.oncontextmenu = function(event) {
			 event.preventDefault();
			 event.stopPropagation();
			 return false;
	};
}
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
