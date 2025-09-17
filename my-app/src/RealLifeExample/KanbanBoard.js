import React from "react";
import "./index.css"

const  KanbanBoard = (props) => { 
  const stagesNames =['Backlog', 'To Do', 'Ongoing', 'Done'];
		const [tasks, setTasks] = React.useState([]);
		const [taskName, setTaskName] = React.useState('');

	const createTask = () =>{
		if(taskName.trim() === '') return;
		setTasks([...tasks, {name: taskName, stage:0}])
		setTaskName('')
	}

	const moveTask = (index, direction) => {
		const updateTasks = [...tasks];
		updateTasks[index].stage += direction;
		setTasks(updateTasks)
	}

	const deleteTask = (index) => {
		const updatedTasks = tasks.filter((_,i) => i !== index);
		setTasks(updatedTasks)
	}
  
	const stagesTasks = [[],[],[],[]];
	tasks.forEach((task, i) => {
		stagesTasks[task.stage].push({...task, index:i});
	})
	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<section className="mt-50 layout-row align-items-center justify-content-center">
				<input 
					id="create-task-input" 
					type="text" 
					className="large" 
					placeholder="New task name" 
					data-testid="create-task-input"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
					 />
				<button 
					type="submit" 
					className="ml-30" 
					data-testid="create-task-button"
					onClick={createTask}
					>Create task</button>
			</section>

			<div className="mt-50 layout-row">
				{stagesTasks.map((tasks, i) => {
					return (
						<div className="card outlined ml-20 mt-0" key={`${i}`}>
							<div className="card-text">
								<h4>{stagesNames[i]}</h4>
								<ul className="styled mt-50" data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return <li className="slide-up-fade-in" key={`${i}${index}`}>
											<div className="li-content layout-row justify-content-between align-items-center">
												<span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
												<div className="icons">
													<button 
														className="icon-only x-small mx-2" 
														data-testid={`${task.name.split(' ').join('-')}-back`}
														disabled={task.stage === 0}
														onClick={() => moveTask(task.index, -1)}
														>
														<i className="material-icons">arrow_back</i>
													</button>
													<button 
														className="icon-only x-small mx-2" 
														data-testid={`${task.name.split(' ').join('-')}-forward`}
														disabled={task.stage === 3}
														onClick={() => moveTask(task.index, 1)}
														>
														<i className="material-icons">arrow_forward</i>
													</button>
													<button 
														className="icon-only danger x-small mx-2" 
														data-testid={`${task.name.split(' ').join('-')}-delete`}
														onClick={() => deleteTask(task.index)}
														>
														<i className="material-icons">delete</i>
													</button>
												</div>
											</div>
										</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default KanbanBoard