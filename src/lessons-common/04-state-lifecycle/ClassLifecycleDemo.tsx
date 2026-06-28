import { Component } from 'react';

type Props = Record<string, never>;

interface State {
  count: number;
  lastUpdate: string;
}

export default class ClassLifecycleDemo extends Component<Props, State> {
  // 1. Initialization (Constructor)
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      lastUpdate: 'Never'
    };
    console.log('[Class] constructor');
  }

  // 2. Mounting (After first render)
  componentDidMount() {
    console.log('[Class] componentDidMount');
    // Common place for API calls, subscriptions, DOM manipulation
  }

  // 3. Updating (Before render decision)
  shouldComponentUpdate(_nextProps: Props, nextState: State) {
    console.log('[Class] shouldComponentUpdate', nextState);
    // Return false to prevent re-render (optimization)
    return true; 
  }

  // 4. Updating (After render)
  componentDidUpdate(_prevProps: Props, prevState: State) {
    console.log('[Class] componentDidUpdate');
    console.log('Previous State:', prevState);
    console.log('Current State:', this.state);
    
    // Example: React to state change (beware of infinite loops!)
    if (prevState.count !== this.state.count) {
       // Logic that runs only when count changes
    }
  }

  // 5. Unmounting
  componentWillUnmount() {
    console.log('[Class] componentWillUnmount');
    // Cleanup: clear timers, cancel requests, remove event listeners
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
      lastUpdate: new Date().toLocaleTimeString()
    }));
  };

  render() {
    console.log('[Class] render');
    return (
      <div className="p-4 border rounded shadow-sm border-orange-200">
        <h2 className="text-xl font-bold mb-4">Class Component Lifecycle</h2>
        <p className="text-sm text-gray-600 mb-4">
          Open console to see: constructor -&gt; render -&gt; componentDidMount
        </p>

        <div className="mb-4">
          <p>Count: <strong>{this.state.count}</strong></p>
          <p className="text-sm text-gray-500">Last Update: {this.state.lastUpdate}</p>
        </div>

        <button 
          onClick={this.increment}
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
        >
          Increment (Trigger Update)
        </button>
      </div>
    );
  }
}
