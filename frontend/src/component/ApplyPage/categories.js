import React from 'react';

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            categories :[]
        }
    }

   async componentWillMount() {
      await  fetch('http://localhost:1337/api/categories').then((response) => {
            if(response.status >= 400) {
                throw new Error('Bad Response')
            }
            return response.json();
        }).then((data) => {
            // console.log(data)
            // data.data.forEach(i => 
            //     console.log(i.attributes.Category, "slllsls"))
            this.setState({categories: data.data});
        })

    }

    render() {
        // console.log(this.state.categories, "cjcjjcjc");
        return this.state.categories.length > 0 && (
            <div>
                {
                    this.state.categories.map((category) => {
                        // console.log(category, "cacacacacac")
                        return(<div>
                            <h2>{category.id}</h2>
                            <h1>{category && category.attributes && category.attributes.Category}</h1>
                        </div>)
                    })
                }
            </div>
        )

    }
}
export default Categories;