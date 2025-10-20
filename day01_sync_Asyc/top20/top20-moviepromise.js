const axios = require('axios');
const url =
  'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

axios
  .get(url) //GET 요청
  .then((result) => {
    if (result.status != 200) {
      throw new Error('request fail!');
    }

    if (result.data) {
      return result.data;
    }

    throw new Error('데이터가 없습니다.');
  })
  .then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('영화 리스트가 없습니다.');
    }
    return data.articleList; //영화리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });
  }) //영화리스트를 제목과 순위 정보로 분리
  .then((results) => {
    for (let movieinfo of results) {
      console.log(`[${movieinfo.rank}위 ${movieinfo.title}]`);
    }
  })
  .catch((error) => {
    console.log('<<에러 발생>>');
    console.error(error);
  });
