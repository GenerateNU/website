import React from 'react';

class Positions extends React.Component {
    constructor() {
        super()
        this.state = {
            positions :[]
        }
    }

   async componentWillMount() {
      await  fetch('http://localhost:1337/api/positions').then((response) => {
            if(response.status >= 400) {
                throw new Error('Bad Response')
            }
            return response.json();
        }).then((data) => {
            this.setState({positions: data.data});
        })

    }

    render() {
        return this.state.positions.length > 0 && (
            <div>
                {
                    this.state.positions.map((position) => {
                        return(<div>
                            <h1>{position && position.attributes && position.attributes.PositionTitle}</h1>
                        </div>)
                    })
                }
            </div>
        )

    }
}
export default Positions;