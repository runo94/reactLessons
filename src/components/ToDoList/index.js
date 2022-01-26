import './todolist.css'

const ToDoList = (props) => {
    const { data, handleMove, handleDelete } = props;

    return (
        <div className="todo">
            {
                data.map((item, i) => (
                    <div className="item" key={`${item.date}-${item.id}`}>
                        <p>
                            {item.task}
                        </p>
                        <button 
                            className="move" 
                            onClick={(e) => handleMove(e, item)}
                        >
                            done
                        </button>
                        <button 
                            className="delete" 
                            onClick={(e) => handleDelete(e, item)} 
                        
                        >
                            delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList;