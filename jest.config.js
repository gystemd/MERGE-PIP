export default {
	extensionsToTreatAsEsm: [".ts"],
	// moduleNameMapper: {
	// 	"^(\\.{1,2}/.*)\\.js$": "$1",
	// },
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "js"],
	testMatch: ["<rootDir>/dist/**/*.spec.(ts|js)"],
	transform: {
		"^.+\\.(ts|tsx)$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.json",
				"useESM": true
			},
		],
	},
};
