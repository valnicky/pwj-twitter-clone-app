const URL = "http://localhost:3000/tweets";


const onEnter = (e) => {
        //console.log(e);
        if (e.key == "Enter") {
            getTwitterData();
        }
    }
    /**
     * Retrive Twitter Data from API
     */
const getTwitterData = () => {
    const query = document.getElementById('user-search-input').value;

    //const url = "http://localhost:3000/tweets?q=coding&count=10";

    if (!query) return;
    const encodedQuery = encodeURIComponent(query);

    const fullUrl = `${URL}?q=${encodedQuery}&count=10`;
    fetch(fullUrl).then((response) => { response.json(); }).then((data) => {
        console.log(data);
    });
}

/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {

}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {

}