const crud = url => resource => {
    return {
        get() {
            fetch(url + resource)
                .then(response => response.json())
                .then(json => console.log(json))
        },
        getId(id){
            fetch(url + resource+'/'+id)
                .then(response => response.json())
                .then(json => console.log(json))
        },
        post(data) {
            fetch(url+resource,{
                method: 'POST',
                body: JSON.stringify(data)
            })
        }
    }
}
export default crud