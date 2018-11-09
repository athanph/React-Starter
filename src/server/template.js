import serialize from 'serialize-javascript'

export default (html, data, bundles) => `
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>React Starter Kit with SSR</title>
	<link rel="icon" href="./assets/images/favicons/favicon.ico" type="image/x-icon">
</head>
<body>
	<div id="root">${html}</div>

	${bundles
		.map(bundle => {
			return `<script src="${bundle.publicPath}"></script>`
		})
		.join('\n')}

	<script src="/assets/js/index.js"></script>
	<script>window.__INITIAL_DATA__=${serialize(data)}</script>
</body>
</html>
`
