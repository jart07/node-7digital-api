exports.Config = {
	/**
	* Path to the json file defining the remote api actions and their mappings
	* onto the wrapper. 
	*
	* @type string
	*/
	schemapath: 'lib/api.json',
	/**
	* Your API consumer key for accessing oauth secured endpoints
	* see http://api.7digital.com/1.2/static/documentation/7digitalpublicapi.html#Introduction
	*
	* @type string
	*/
	oauthkey: 'YOUR_KEY_HERE',
	/**
	* Your oauth consumer secret for signing oauth secured request urls.
	*
	* @type string
	*/
	oauthsecret: 'YOUR_SECRET_HERE',
	/**
	* Enables verbose logging to the console of all api requests and responses when set to true
	*
	* @type boolean
	*/
	debug: true,
	/**
	* The desired format of API responses
	* Sets format to JSON by default
	*
	* @type string
	*/
	format: 'json',
	/**
	* A logger object for outputting messages. This should be an obect, which has function
	* properties for each of the npm loglevels. Winston provides a default implementation.
	*
	* @type Winston.Logger
	*/
	logger: require('./lib/logger')
};
