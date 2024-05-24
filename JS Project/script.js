window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_fb = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value.trim(); // Trim whitespace from the input

		if (task === "") {
			alert("Task cannot be blank"); // Display an alert if the input is empty
			return; // Exit the function if the input is empty
		}

		const task_fb = document.createElement('div');
		task_fb.classList.add('task');

		const task_content_fb = document.createElement('div');
		task_content_fb.classList.add('content');

		task_fb.appendChild(task_content_fb);

		const task_input_fb = document.createElement('input');
		task_input_fb.classList.add('text');
		task_input_fb.type = 'text';
		task_input_fb.value = task;
		task_input_fb.setAttribute('readonly', 'readonly');

		task_content_fb.appendChild(task_input_fb);

		const task_actions_fb = document.createElement('div');
		task_actions_fb.classList.add('actions');
		
		const task_edit_fb = document.createElement('button');
		task_edit_fb.classList.add('edit');
		task_edit_fb.innerText = 'Edit';

		const task_delete_fb = document.createElement('button');
		task_delete_fb.classList.add('delete');
		task_delete_fb.innerText = 'Delete';

		task_actions_fb.appendChild(task_edit_fb);
		task_actions_fb.appendChild(task_delete_fb);

		task_fb.appendChild(task_actions_fb);

		list_fb.appendChild(task_fb);

		input.value = ''; // Clear the input field

		task_edit_fb.addEventListener('click', (e) => {
			if (task_edit_fb.innerText.toLowerCase() == "edit") {
				task_edit_fb.innerText = "Save";
				task_input_fb.removeAttribute("readonly");
				task_input_fb.focus();
			} else {
				task_edit_fb.innerText = "Edit";
				task_input_fb.setAttribute("readonly", "readonly");
			}
		});

		task_delete_fb.addEventListener('click', (e) => {
			list_fb.removeChild(task_fb);
		});
	});
});
