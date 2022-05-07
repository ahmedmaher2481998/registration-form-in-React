import { useState } from "react";

const FormApp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [bio, setBio] = useState("");
	// const [bio,setBio]=useState('')
	/**
	 * Name
	 * Email
	 * Phone number
	 * Staff: Instructor or Student (radio buttons)
	 * Bio (text area)
	 * Sign up for email notifications (checkbox)
	 * Phone type: Home, Work, or Mobile (dropdown menu)
	 *  */
	/**
	 * Name must be present
	 * Email must be present and should be properly formatted
	 * Phone number should be properly formatted
	 * Phone type should be selected if a phone number is present
	 * Bio should have a character limit of 280 characters
	 */
	return (
		<form className='flex mx-auto my-16 items-center justify-center flex-col'>
			<div className='p-2 '>
				<label htmlFor='name' className='mylabel '>
					Name
				</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className='myinput'
				/>
			</div>

			<div className='p-2 '>
				<label htmlFor='email' className='mylabel '>
					Email
				</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className='myinput'
				/>
			</div>
			<div className='p-2 '>
				<label htmlFor='phone' className='mylabel '>
					Phone
				</label>
				<input
					type='number'
					placeholder='Phone No'
					id='phone'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					required
					className='myinput'
				/>
			</div>
			<div className='p-2 '>
				<fieldset className='rounded-2xl border-2 p-2 text-lg text-white  border-emerald-900 '>
					<legend>Select Staff</legend>
					<div>
						<input
							type='radio'
							value={"instructor"}
							name='staff'
							id='instructor'
							className='radio'
						/>
						<label htmlFor='instructor' className='mylabel m-5 '>
							Instructor
						</label>
					</div>
					<div>
						<input
							type='radio'
							name='staff'
							value='student'
							id='student'
							className='radio'
						/>
						<label htmlFor='student' className='mylabel m-5 '>
							Student
						</label>
					</div>
				</fieldset>
			</div>
		</form>
	);
};
export default FormApp;
