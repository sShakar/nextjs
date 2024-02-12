'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createTodo } from '@/actions/todoActions';

export default function TodoForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const { pending } = useFormStatus();

	return (
		<>
			<form
				ref={formRef}
				action={async formData => {
					await createTodo(formData);
					formRef.current?.reset();
				}}
				className="flex gap-2 flex-col mt-4"
			>
				<input
					type="text"
					name="title"
					className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
				/>
				<div className="flex gap-1 justify-end">
					<Link
						href=".."
						className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
					>
						Cancel
					</Link>

					<button
						type="submit"
						className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
						disabled={pending}
					>
						{pending ? 'Submitting...' : 'Submit'}
					</button>
				</div>
			</form>
		</>
	);
}
