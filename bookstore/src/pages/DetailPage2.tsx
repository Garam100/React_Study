import { Component, type ReactNode } from "react";

interface LifeCycleExampleState {
    count: number;
}

class DatailPage2 extends Component<{}, LifeCycleExampleState>{
    constructor(props: {}){
        super(props);
        this.state = {count:0};
        console.log('constructor');
    }

    componentDidMount(): void {
        console.log('mount');
    }

    componentDidUpdate(): void {
        console.log('update')
    }

    componentWillUnmount(): void {
        console.log('unmount')
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={()=>{ this.setState({count: this.state.count +1})}}>증가</button>
            </div>
        )
    }
    
}

export default DatailPage2;