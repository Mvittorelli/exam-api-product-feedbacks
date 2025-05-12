const APIURL = 'http://51.38.232.174:3002/v1'

async function get() {
    const ans = await fetch(`${APIURL}/feedbacks`, {
        method: "GET"
    })

    const data = await ans.json()
    console.log(data)

    test(data)
}

function test(data) {
    for (let i = 0; i < data.length; i++)
        console.log(data.1.category)
}

get()
