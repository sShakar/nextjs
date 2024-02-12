'use client';

import { toggleTodo } from '@/actions/todoActions';

type TodoItemProps = {
	id: string;
	title: string;
	complete: boolean;
};

export default function TodoItem({ id, title, complete }: TodoItemProps) {
	return (
		<li className="flex gap-1 items-center">
			<input
				id={id}
				type="checkbox"
				className="cursor-pointer peer"
				defaultChecked={complete}
				onChange={async e => await toggleTodo(id, e.target.checked)}
			/>
			<label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
				{title}
			</label>
		</li>
	);
}
