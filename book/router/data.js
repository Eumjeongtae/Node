const getBooks = () => {
    return new Promise(async (resolve) => {
      let result = await fetch(`https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbdmawjdxo121911001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`)
      let data = await result.json()
      resolve(data)
    })
  }

  export{getBooks}