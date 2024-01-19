import axios from 'axios';

const apiBaseUrl = 'https://kitsu.io/api/edge';

export async function getRandomAnime() {
  try {
    const response = await axios.get(`${apiBaseUrl}/anime/${Math.floor(Math.random() * 1598)}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to make request:', error.message);
    throw error; 
  }
}

export async function getMultipleRandomAnime(count) {
  const requests = Array.from({ length: count }, () => getRandomAnime());
  try {
    const results = await Promise.all(requests);
    return results;
  } catch (error) {
    console.error('Failed to make requests:', error.message);
    throw error;
  }
}

export async function getCategories(count) {
    try {
      const response = await axios.get(`https://kitsu.io/api/edge/categories/` + count);
      
      return {
        label: response.data.data.attributes.title
      }
    } catch (error) {
      console.error('Failed to make request:', error.message);
    }
  }


  export async function getAllCategories(count) {
    const requests = [];

    for (let i = 1; i <= count; i++) {
      requests.push(getCategories(i));
    }
    try {
      const results = await Promise.all(requests);
      return results;
    } catch (error) {
      console.error('Failed to make requests:', error.message);
      throw error;
    }
  }

  export async function filterSearch(filter, info) {
    try {
      const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[` + filter + ']=' + info +'&page[limit]=20');
      
      return response.data.data;
    } catch (error) {
      console.error('Failed to make request:', error.message);
    }
  }