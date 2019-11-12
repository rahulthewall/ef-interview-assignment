const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

/**
 * We use the Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 * The async function accepts the postID as an argument and tries to fetch the resource
 * If the resource exists, it returns an object with the title and the status code.
 * Otherwise, it returns the error code with the error text.
 * An example invocation of the function is shown, where we check for the status code and print the title or the error. 
 */

async function getPostTitle(postID) {
  const fetchURL = `${API_ENDPOINT}/posts/${postID}`;
  const response = await fetch(fetchURL);
  if (response.ok) {
    const json = await response.json();
    const { title } = json;
    return {
      status: response.status,
      title,
    };
  }
  return {
    status: response.status,
    error: response.statusText
  }
}

getPostTitle(100).then(response => {
  if (response.status === 200) {
    console.log(`Title: ${response.title}`);
  } else {
    console.log(`Error: ${response.error}`);
  }
});
