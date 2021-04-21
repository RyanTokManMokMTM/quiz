let url = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"

var GetData = $.getJSON(url)

GetData.done((msg) => {
    //console.log(msg.result.results)
    var data = msg.result.results


    $.each(data, (i, item) => {
        let t = Object.keys(data[i]).map((key) => [key, data[i][key]])

        $(".container").html()
        $(".container").append($("<h2/>").text(t[12][1]))
        $(".container").append($("<h2/>").text(item.A_Name_Ch))
        $(".container").append($("<h3/>").text(item.A_Behavior))
        $(".container").append($("<img/>").attr("src", item.A_Pic01_URL))

    })
})

GetData.fail((msg) => {
    console.log(msg)

})