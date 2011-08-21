var api = require('../index');

require('./Matchers.js');

describe("Tags actions", function() {

	var releases;

	beforeEach(function() {
		tags = new api.Tags();
	});

	it("should generate an all method for the default action", function() {
		expect(tags.all).toBeDefined();
		expect(tags.all).toBeAFunction();
	});

});