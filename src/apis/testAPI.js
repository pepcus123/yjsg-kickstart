const APP_HEADERS = {
  //Authorization: ``,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const defaultConfig = {
  method: 'GET',
  headers: APP_HEADERS,
  mode: 'cors',
  cache: 'default',
};

export const testAPI = (url, config = defaultConfig) => {
  let errorMessage = '';
  return new Promise((resolve, reject) => {
    fetch(url, config)
      .then((resp) => {
        // If the HTTP response is a non 200 status code, attempt to parse the
        // generated error message, otherwise just return the default
        // status message
        if (!resp.ok) {
          resp.json()
            .then(json => reject(json))
            .catch((error) => {
              // Handled the case when API response cannot be parsed to JSON.
              errorMessage = 'Error occurred while processing request.';
              console.warn(`unable to parse API error message. ERROR: ${error}`);
              reject(
                {
                  error: {
                    message: errorMessage,
                  },
                },
              );
            });

          // Otherwise, the request was successful and we return the
          // parsed JSON response.
        } else {
          resp.json().then(json => resolve(json));
        }
      })

      // Finally, catch any other errors and reject the Promise
      .catch((error) => {
        console.error(`Unable to parse API error message. ERROR: ${error}`);
        reject(
          {
            error: {
              message: errorMessage,
            },
          },
        );
      });
  });
};
