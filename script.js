//Attempt to read the information from websiteList.json
//let dataList
    const data1 = fetch ("websiteList.json")
    .then (Response=>Response.json())
    .then(data=>{
        console.log(data);
        // dataList = JSON.parse(data);
        
     })

 //  The function recursively sends the current object to the websiteView
let recorsList = (appObjects, level, thisTag) => {

    let thisDiv = websiteView(appObjects, level, thisTag)

    if ("subData" in appObjects) {
        appObjects.subData.forEach(app => {
            recorsList(app, level + 1, thisDiv)
        })
    }
}

//The function creates the object display according to the received data.
let websiteView = (appObject, classlevel, fatherTag) => {
    
    let [tag, id, name, link, ] = [
        document.createElement('div'),
        document.createElement('span'),
        document.createElement('span'),
        document.createElement('a')]
       
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        document.backgroundColor =hue;
        
    id.innerHTML = `Id: ${appObject.id}`
    name.innerHTML = `Site Name: ${appObject.name}`
    link.innerHTML = `Site Url: ${appObject.name}`
    link.setAttribute('href', `http://${appObject.url}`)

    tag.appendChild(id)
    tag.appendChild(name)
    tag.appendChild(link)
    tag.setAttribute('class', `level${classlevel}`)
    fatherTag.appendChild(tag)

    return tag
}

let firstTag = document.createElement('main')

let body = document.querySelector('body')
body.appendChild(firstTag)

let dataList =
[
    {
        id: "1",
        name: "google",
        url: "www.google.com",
        subData: [
            {
                id: "2",
                name: "walla",
                url: "www.walla.co.il"
            },
            {
                id: "3",
                name: "ynet",
                url: "www.ynet.co.il",
                subData: [
                    {
                        id: "4",
                        name: "mako",
                        url: "www.mako.co.il"
                    },
                    {
                        id: "5",
                        name: "google",
                        url: "www.google.com"
                    },
                    {
                        id: "6",
                        name: "walla",
                        url: "www.walla.co.il"
                    }
                ]
            },
            {
                id: "7",
                name: "google",
                url: "www.google.com"
            }
        ]
    },
    {
        id: "8",
        name: "ynet",
        url: "www.ynet.co.il",
        subData: [
            {
                id: "9",
                name: "walla",
                url: "www.walla.co.il"
            },
            {
                id: "10",
                name: "google",
                url: "www.google.com",
                subData: [
                    {
                        id: "11",
                        name: "ynet",
                        url: "www.ynet.co.il",
                        subData: [
                            {
                                id: "12",
                                name: "walla",
                                url: "www.walla.co.il"
                            },
                            {
                                id: "13",
                                name: "google",
                                url: "www.google.com"
                            },
                            {
                                id: "14",
                                name: "mako",
                                url: "www.mako.co.il"
                            }
                        ]
                    },
                    {
                        id: "15",
                        name: "google",
                        url: "www.google.com"
                    },
                    {
                        id: "16",
                        name: "mako",
                        url: "www.mako.co.il"
                    }
                ]
            },
            {
                id: "17",
                name: "walla",
                url: "www.walla.co.il",
                subData: [
                    {
                        id: "18",
                        name: "ynet",
                        url: "www.ynet.co.il"
                    },
                    {
                        id: "19",
                        name: "google",
                        url: "www.google.com"
                    },
                    {
                        id: "20",
                        name: "walla",
                        url: "www.walla.co.il"
                    }
                ]
            },
            {
                id: "21",
                name: "mako",
                url: "www.mako.co.il"
            }
        ]
    }
]
dataList.map(app => {
    recorsList(app, 1, firstTag)
})