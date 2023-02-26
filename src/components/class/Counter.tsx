import {Component} from 'react'

type Props = {
    message: string
}

type State = {
    count: number
}

// jika class component ini tidak menggunakan props atau state
// lakukan seperti ini
// Component<{}, State>
// atau juga tidak memiliki state
// Component<{}>

export class Counter extends Component<Props, State>{
    state = {
        count: 0
    }

    handleClick = ()=>{
        this.setState((prevState)=>({count: prevState.count + 1}))
    }

    render(){
        return(
            <div>
                <button>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}