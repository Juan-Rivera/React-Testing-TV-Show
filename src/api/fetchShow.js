import axios from 'axios';

//const url = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"

export const fetchShow = (url) => {
    return axios.get(url)
      .then(res => {
          return res
        })
  }
  