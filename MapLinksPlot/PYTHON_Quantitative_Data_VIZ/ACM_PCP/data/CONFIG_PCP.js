// Define the number of maps that you want to visualize. upto 15 maps are supported.
var NumOfMaps = 6;

//Define variables that you want to visualize at initial views. For example, enter five variables when the NumOfMaps is equal to 5.
var InitialLayers = ["2018 % White", "2018 % Black", "2018 % Asian", "2018 % Hispanic", "2018 % Owner occupied housing", "2018 % Foreign born", "2018 % Bachelor's degree", "2018 % Graduate or professional degree", "2018 % High school graduate or higher", "2018 % Service occupations", "2018 % Manufacturing", "2018 % Management, business, science, and arts occupations", "2018 % Natural resources, construction, and maintenance occupations", "2018 % Production, transportation, and material moving occupations", "2018 % Poverty"];

/*Define initial map center and zoom level below. Map Extent and Zoom level will be automatically adjusted when you do not define map center and zoom level. Double-slashes  in the front need to be deleted to make them effective*/
//var Initial_map_center = [34.0522, -117.9];  
//var Initial_map_zoom_level = 8;   

/* It shows the change in the number of polygons belonging to each class intervals in different 
   It appears only when the map extent and the class intervals of all maps are same.
   To make all maps have the same map extent and class intervals, enable "Grouping All" or click "Sync" on one of maps   */
var Stacked_Chart = false;
var Correlogram = false;
var Scatter_Plot = false;
var Parallel_Coordinates_Plot = true;

// The number of digit after the decial point.
var Num_Of_Decimal_Places = 2;                             // default = 1 

//Adjust the size of maps
var Map_width  = "360px";                                  // min 350px
var Map_height  = "360px";                                  // min 300px

//Adjust the size of the stacked chart. Double-slashes in the front need to be deleted to make them effective
//var Chart_width  = "350px";                                // min 350px
//var Chart_height = "350px";                                // min 300px


