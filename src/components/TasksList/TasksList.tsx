import TaskCard from '../TaskCard/TaskCard'
import styles from "./TasksList.module.scss"

interface Task {
    id: number,
    name: string,
    descr: string,
    marked: boolean
}

const TasksList = () => {
    const taskArr : Task[] = [
        {id: 1, name: "Title1", descr: "Описание1", marked: false},
        {id: 2, name: "Title2", descr: "Описание2", marked: false},
        {id: 3, name: "Title3", descr: "Описание3", marked: false}
    ]
    //Массив значений - временное решение перед использованием API. 

  return (
    <div className={styles.tasksList}>
        {taskArr.map((task: Task) => {
            return <TaskCard key={task.id} task={task}/>
        })}
    </div>
  )
}

export default TasksList
