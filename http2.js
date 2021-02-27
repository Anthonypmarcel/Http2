//create the HTTP constructor
class HTTP{
//create the get method
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
//create the post method
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'POST',
                headers:{'Content-type':'application/json',  
            },
            body: JSON.stringify(data)
        }

            
            )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    
//create the put method
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'PUT',
                headers:{'Content-type':'application/json',  
            },
            body: JSON.stringify(data)
        }
 
            )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
//create the delete method
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'DELETE',
                headers: {'content-type':'application/json'}
            })
            .then(res => res.json())
            .then(() => resolve('post deleted'))
            .catch(err => reject(err))
        })
    }
}