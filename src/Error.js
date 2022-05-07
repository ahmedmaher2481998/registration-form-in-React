const ErrorComponent = ({ errs }) => {
	return (
		<ul className='border-4 absolute left-36 border-red-700 flex flex-col items-center bg-red-300 text-neutral-900 text-xl p-2 rounded-2xl '>
			{errs.length > 0
				? errs.map((err) => {
						return (
							<li
								ker={err}
								className='bg-rose-400 hover:bg-rose-700 hover:rounded-l-none hover:scale-105  rounded-full text-center m-1 text-white p-1 w-5/6 '
							>
								{err}
							</li>
						);
				  })
				: null}
		</ul>
	);
};
export default ErrorComponent;
