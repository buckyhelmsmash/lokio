import pkg from "../../package.json" assert { type: "json" };

export const ENV = {
	NAME: "lokio",
	VERSION: pkg.version,
	AUTHOR: pkg.author.name,
	TAGLINE: "Structuring Code, One Command at a Time",
	CONFIG_FILE_NAME: ".lokio.yaml",
	GUTHUB: {
		LOKIO_TEMPLATE: "https://github.com/any-source/examples/tarball/main",
		LOKIO_GITHUB_URL:
			"https://raw.githubusercontent.com/any-source/examples/main",
	},
};
