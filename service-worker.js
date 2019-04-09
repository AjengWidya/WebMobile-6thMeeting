// TODO 2.1
var	CACHE_NAME	=	'static-cache';
var	urlsToCache	=	[
	'.',
	'index.html',
	'styles/main.css'
];
self.addEventListener('install',	function(event)	{
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache)	{
			return	cache.addAll(urlsToCache);
		})
	);
});