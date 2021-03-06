/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'Scalar Field Comparison with Topological Descriptors';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
},  {
    field: 'software',
    title: 'software',
    minTagFrequency: 1
},/* {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
},*/ {
    field: 'publisher',
    title: 'Publisher',
    minTagFrequency: 1
},  {
    field: 'year',
    title: 'Year',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
 
var paper = null;
/*
var paper = {
    html: 'Literature collection for <b><a href="http://www.visus.uni-stuttgart.de/uploads/tx_vispublications/eurovis14-star.pdf" target="_blank">SurVis</a></b>',
    id: 'Beck2016Visual'
};
*?
/**
 * Extra pages like an about page that will be listed in the footer an can be opened on demand (page name -> path)
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
var customStyle = '';
/* Example for simplified entries */
//var customStyle = 'styles/custom_entries_simplified.css';

/**
 * Options for showing citation information (set to null to avoid showing any citation information)
 * minCitationCount: minimum number of citations of a paper to be displayed in the visualization
 * @type {{minCitationCount: number}}
 */
/* var citations = {
    minCitationCount: 5
}; */
var citations = null;
