const axios = require('axios');

async function getTop20Movies() {
  const url =
    'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
  try {
    //네트워크로 데이터를 받아오니까 await 를 통해 대기 시킴
    const result = await axios.get(url);
    const { data } = result; //result 값에는 data 프로퍼티가 있다.

    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('데이터가 없습니다.');
    }
    const movieinfos = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });

    for (let movieinfo of movieinfos) {
      console.log(`[${movieinfo.rank}위 ${movieinfo.title}]`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
