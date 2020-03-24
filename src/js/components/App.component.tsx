import React, { Component } from 'react';

export class App extends Component {

	render() {
		return (
			<div className="todo-app">
		<header className="todo-app__header">
			<h1 className="title">todos</h1>
		</header>

		<main className="todo-app__frame">
			<section className="todo-app__main-controls main-controls">
				<div className="main-controls__select-all">
					<button
						className="main-controls__select-all-button"
						title="Select all tasks"
					>
						Select all tasks
					</button>
				</div>
				<div className="main-controls__create-new">
					<input
						type="text"
						className="main-controls__create-new-input"
						placeholder="What needs to be done?"
						aria-label="Add new item"
					/>
				</div>
			</section>

			<section className="todo-app__tasks">
				<ul className="todo-app__task-list tasks">
					<li className="todo-app__task-item task-item">
						<div className="task-item__view">
							<input
								type="checkbox"
								className="task-item__status-input"
								id="item1"
								aria-label="Completed task: HTML"
							/>
							<label className="task-item__status-icon" htmlFor="item1"></label>
							<span className="task-item__text">HTML</span>
							<button className="task-item__delete" title="Delete task">
								Delete Task
							</button>
						</div>
						<div className="task-item__edit" hidden>
							<input
								type="text"
								className="task-item__input"
								value="HTML"
								aria-label="Edit task: HTML"
							/>
						</div>
					</li>

					<li className="todo-app__task-item task-item">
						<div className="task-item__view">
							<input
								type="checkbox"
								checked
								className="task-item__status-input"
								id="item2"
								aria-label="Completed task: CSS"
							/>
							<label className="task-item__status-icon" htmlFor="item2"></label>
							<span className="task-item__text">CSS</span>
							<button className="task-item__delete" title="Delete task">
								Delete Task
							</button>
						</div>
						<div className="task-item__edit" hidden>
							<input
								type="text"
								className="task-item__input"
								value="CSS"
								aria-label="Edit task: CSS"
							/>
						</div>
					</li>

					<li className="todo-app__task-item task-item">
						<div className="task-item__view">
							<input
								type="checkbox"
								className="task-item__status-input"
								id="item3"
								aria-label="Completed task: JS tools"
							/>
							<label className="task-item__status-icon" htmlFor="item3"></label>
							<span className="task-item__text">JS tools</span>
							<button className="task-item__delete" title="Delete task">
								Delete task
							</button>
						</div>
						<div className="task-item__edit" hidden>
							<input
								type="text"
								className="task-item__input"
								value="JS tools"
								aria-label="Edit tsk: JS tools"
							/>
						</div>
					</li>
				</ul>
			</section>

			<section className="todo-app__actions-bar actions-bar">
				<div className="actions-bar__item">
					<div className="task-counter">3 items left</div>
				</div>
				<div className="actions-bar__item">
					<div
						className="task-filter"
						role="group"
						aria-label="Filter tasks by status"
					>
						<label className="task-filter__item">
							<input
								type="radio"
								className="task-filter__input"
								name="filter"
								value="All"
							/>
							<span className="task-filter__text" aria-label="Select all tasks"
								>All</span
							>
						</label>
						<label className="task-filter__item">
							<input
								type="radio"
								className="task-filter__input"
								name="filter"
								value="Active"
							/>
							<span className="task-filter__text" aria-label="Select active tasks"
								>Active</span
							>
						</label>
						<label className="task-filter__item">
							<input
								type="radio"
								className="task-filter__input"
								name="filter"
								value="Completed"
							/>
							<span className="task-filter__text" aria-label="">Completed</span>
						</label>
					</div>
				</div>
				<div className="actions-bar__item">
					<button className="task-clear-completed">Clear completed</button>
				</div>
			</section>
		</main>
	</div>);
	}

}