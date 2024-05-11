import axios from 'axios'
const Base_URL='https://youtube-v31.p.rapidapi.com'
const options = {
  url: Base_URL,
  params: {
    maxResults: '100'
    ,
  },
  headers: {
    'X-RapidAPI-Key':  'your key',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const useVideo=async(url)=>{
  const responce= await axios.get(`${Base_URL}/${url}`,options)
return responce
}