const request = async e => {
    let { method, url, params } = e
    const str = new URLSearchParams(params).toString()
    url += "?" + str
    const res = await fetch(url, {
        method,
        headers: {
            "Content-type": "application/json"
        }
    })
    console.log(await res.json())
}
