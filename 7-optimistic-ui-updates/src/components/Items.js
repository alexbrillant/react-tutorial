import React from 'react';

const Items = ({ items, deleteItemOptimistic, loading }) => {
    return (
        <ul style={{ opacity: loading ? 0.6 : 1 }}>
            {items.map(item => (
                <li key={item.id}>
                    {item.title}{' '}
                    <button onClick={() => deleteItemOptimistic(item.id)}>
                        Delete item
              </button>
                </li>
            ))}
        </ul>
    )
}

export default Items