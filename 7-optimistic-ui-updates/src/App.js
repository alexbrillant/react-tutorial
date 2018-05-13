import React, {Component} from 'react';
import Items from './components/Items';

function deleteItemRequest(id) {
  return new Promise((resolve, reject) => {
    setTimeout(id === 3 ? reject : resolve, 750);
  });
}

class App extends Component {
  state = {
    items: Array.from(Array(5), (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
    })),
    loading: false,
    error: null,
  };

  deleteItemOptimistic = id => {
    const deletingItem = this.state.items.find(item => item.id === id);

    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }));

    deleteItemRequest(id)
      .catch(() =>
        this.restoreItem(deletingItem, id)
      );
  };

  restoreItem(deletingItem, id) {
    return this.setState(state => ({
      items: [...state.items, deletingItem].sort((a, b) => a.id - b.id),
      error: `Request failed for item ${id}`,
    }));
  }

  render() {
    const {items, loading, error} = this.state;

    return (
      <div>
        <h4>Optimistic UI updates in React using setState()</h4>
        <Items loading={loading} deleteItemOptimistic={this.deleteItemOptimistic} items={items} />
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default App;
