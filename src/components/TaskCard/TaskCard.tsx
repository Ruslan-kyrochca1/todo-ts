import React, { useState } from 'react'
import styles from "./TaskCard.module.scss"

interface Task {
    id: number,
    name: string,
    descr: string,
    marked: boolean
}

interface TaskCardProps{
  task: Task
}

const TaskCard: React.FC<TaskCardProps> = ({ task}) => {
  const [marked, setMarked] = useState(task.marked)
    
  return (
    <div className={`${styles.taskCard} ${marked ? "" : styles.taskMarked }`} key={task.id}>
      <h2 className='task-title'>{task.name}</h2>
      <p className='task-descr'>{task.descr}</p>
      <button className='task-button' onClick={() => {
        setMarked(prev => !prev)
        task.marked = !task.marked
      }}>{marked? "Отметить выполненным" : "Отменить невыполненным" }</button>
    </div>
  )
}

export default TaskCard
