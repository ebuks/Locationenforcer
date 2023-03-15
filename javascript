// Function to check if a user is within a geofenced area
function isWithinGeofence(latitude, longitude) {
	// Define the geofence area around the hospital (latitude, longitude, radius in meters)
	var hospitalLocation = [37.7749, -122.4194, 1000];

	// Calculate the distance between the user's location and the hospital location
	var distance = calculateDistance(latitude, longitude, hospitalLocation[0], hospitalLocation[1]);

	// If the user is within the geofence area, return true
	if (distance <= hospitalLocation[2]) {
		return true;
	}

	// Otherwise, return false
	return false;
}

// Function to calculate the distance between two points on a sphere using the Haversine formula
// Adapted from https://stackoverflow.com/a/21623206
function calculateDistance(lat1, lon1, lat2, lon2) {
	var R = 6371e3; // Earth's radius in meters
	var φ1 = toRadians(lat1);
	var φ2 =
var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c; // Distance in meters

return d;
// Get the latitude and longitude values from the hidden form fields
var latitude = parseFloat(document.getElementById('latitude').value);
var longitude = parseFloat(document.getElementById('longitude').value);

// Check if the user is within the geofence area
if (isWithinGeofence(latitude, longitude)) {
	// If the user is within the geofence area, proceed with sign-in
	alert('Sign-in successful!');
} else {
	// If the user is outside the geofence area, show an error message
	alert('Error: You are not within the hospital area.');
}
