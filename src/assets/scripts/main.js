// TODO: site logics

$(($) => {
  const $body = $('html, body')

  $('#scroll_top').on('click', () => {
    $body.animate({ scrollTop: 0 }, 600)
    return false
  })
})


async function timeout (num) {
  let res = await new Promise((resolve, reject) =>  {
    setTimeout(() => {
      resolve('返回结果')
    }, num);
  })
  console.log(res)
}
timeout(2000)