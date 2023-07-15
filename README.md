# osm-demo

The code is kept as simple as possible.
Only API exposed is /explore

We have to pass bbox data with get method.
Example:
localhost:8000/explore/-0.01,51,0.1,51.02

The bbox data is in order min_lon,min_lat,max_lon,max_lat.

.env file should contain PORT.
Example: 
PORT=8000