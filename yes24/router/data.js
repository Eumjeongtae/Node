let bestsellerList = {
  title: '국내도서 종합 베스트',
  list: [
    {
      bid: 100,
      bname: '퓨처 셀프',
      bname_comment: '현재와 미래가 달라지는 놀라운 혁명',
      author: '벤저민하디',
      translator: '최은아',
      publisher: '상상스퀘어',
      pdate: '2023년 8월',
      price: '19800',
      dc: 10
    },
    {
      bid: 111,
      bname: '퓨처 셀프222',
      bname_comment: '현재와 미래가 달라지는 놀라운 혁명',
      author: '벤저민하디',
      translator: '최은아',
      publisher: '상상스퀘어',
      pdate: '2023년 8월',
      price: '19800',
      dc: 10
    },
  ]
}
let realTimeBestsellerList = {
  title: '실시간 베스트',
  list: [
    {
      bid: 101,
      bname: 'ELLE 엘르 B형 (여성월간) : 11월 [2023]',
      bname_comment: '표지 : BTS 지민',
      author: '허스트중앙 편집부',
      translator: '',
      publisher: 'HEARST JOONGANG',
      pdate: '2023년 10월',
      price: '12250',
      dc: 5
    },

  ]
}

let dayBestsellerList = {
  title: '국내도서 일별 베스트',
  list: [
    {
      bid: 102,
      bname: ' 시대예보: 핵개인의 시대',
      bname_comment: '[ 양장 ]',
      author: '송길영',
      translator: '',
      publisher: '교보문고',
      pdate: '2023년 09월',
      price: '18900',
      dc: 10
    },

  ]
}
let monthBestsellerList ={ 
  title: '국내도서 월별 베스트',
  list : [
  {
    bid: 103,
    bname: ' 도시와 그 불확실한 벽',
    bname_comment: '',
    author: '무라카미 하루키',
    translator: '홍은주',
    publisher: '문학동네',
    pdate: '2023년 09월',
    price: '17550',
    dc: 10
  },

]}
let hotPriceBestsellerList = {
  title: '특가 베스트(정가제 Free)',
  list : [
  {
    bid: 104,
    bname: '  2024년 애드워드 호퍼 ‘고독이 나를 위로한다’ 탁상달력',
    bname_comment: ' [ 스프링북 ]',
    author: '편집부 저',
    translator: '',
    publisher: '북엔',
    pdate: '2023년 09월',
    price: '6900',
    dc: 40
  },

]}
let steadyseller = {
  title: '국내도서 스테디셀러',
  list : [
  {
    bid: 105,
    bname: ' 불편한 편의점 ',
    bname_comment: ' [ 벚꽃 에디션 ]',
    author: '김호연 저',
    translator: '',
    publisher: '나무옆의자',
    pdate: '2021년 04월',
    price: '12600',
    dc: 10
  },

]}

export {
  bestsellerList,
  realTimeBestsellerList,
  dayBestsellerList,
  monthBestsellerList,
  hotPriceBestsellerList,
  steadyseller
}

