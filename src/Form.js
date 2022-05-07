import { useEffect, useState } from "react";
import v from "validator";
import ErrorComponent from "./Error";

const FormApp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [bio, setBio] = useState("");
	const [phoneType, setPhoneType] = useState("");
	const [agree, setAgree] = useState(false);
	const [staff, setStaff] = useState("");
	const [errorv, setErrorsv] = useState([]);
	const [hasSub, setHasSub] = useState(false);
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
	 * //TODO Form Validation And Error msgs
	 * Name must be present
	 * Email must be present and should be properly formatted
	 * Phone number should be properly formatted
	 * Phone type should be selected if a phone number is present
	 * Bio should have a character limit of 280 characters
	 */
	const submitHandle = (e) => {
		setBio("");
		setEmail("");
		setName("");
		setPhone("");
		setHasSub(true);
		e.preventDefault();
		const info = {
			name,
			email,
			bio,
			phone,
			phoneType,
			agree,
			staff,
		};
		console.log(info);
		console.log("check", v.isEmail("ahmedmaher2481998@yaoo.com"));
	};
	useEffect(() => {
		//to Validate
		let errs = [];
		if (!v.isAlpha(name)) errs.push("Name Is Not Valid!");
		if (!v.isEmail(email)) errs.push("Email is Not Vaild!");
		if (!v.isMobilePhone(phone, ["ar-EG", "en-US"]) || !phoneType)
			errs.push("Mobile Phone Number or Type Is Not Vaild !");
		if (!v.isLength(bio, { min: 280, max: undefined }))
			errs.push("Bio Is Too Short!");
		setErrorsv(errs);
	}, [staff, name, phone, phoneType, email, bio, agree]);
	return (
		<div className='flex felx-row justify-between'>
			<div className='m-1'>
				{errorv.length > 0 && hasSub && (
					<ErrorComponent errs={errorv} />
				)}
			</div>
			<form
				onSubmit={submitHandle}
				className='flex mx-auto my-16 items-center justify-center flex-col'
			>
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
					<fieldset
						onChange={(e) => setStaff(e.target.value)}
						className='rounded-2xl border-2 p-2 text-lg text-white  border-emerald-900 '
					>
						<legend>Select Staff</legend>
						<div>
							<input
								type='radio'
								value={"instructor"}
								name='staff'
								id='instructor'
								className='radio'
							/>
							<label
								htmlFor='instructor'
								className='mylabel m-5 '
							>
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
				<div className='mt-2'>
					<label htmlFor='bio ' className='mylabel'>
						Bio:
					</label>
					<textarea
						name='bio'
						id='bio'
						cols='40'
						value={bio}
						rows='5'
						className='border-2 border-slate-500 rounded-2xl bg-slate-200 focus:bg-white focus:ring-2 focus:ring-ingigo-500'
						onChange={(e) => setBio(e.target.value)}
					></textarea>
				</div>
				<div className='mt-2 felx items-center '>
					<input
						type='checkbox'
						onChange={(e) => setAgree((pre) => !pre)}
						className='rounded-md w-6 h-6 border border-gray-200 '
						name='agre'
						id='agree'
					/>
					<label className='m-2 mylabel' htmlFor='agree'>
						Sing up fro{" "}
						<span className='text-red-500'>
							<a href='/' onClick={(e) => e.preventDefault()}>
								Notification .
							</a>
						</span>
					</label>
				</div>
				<select
					onChange={(e) => setPhoneType(e.target.value)}
					className='mt-2 text-center myinput'
					name='pt'
					id='pt'
				>
					<option disabled></option>
					<option value='home'>home</option>
					<option value='work'>work</option>
					<option value='cellPhone'>cellPhone</option>
				</select>
				<div className='mt-2'>
					<input
						className='bg-indigo-600 border-2 border-gray-900 py-2 px-6 rounded-2xl m-2 text-white hover:bg-indigo-400 hover:text-black '
						type='submit'
					/>
					<input
						className='bg-indigo-600 border-2 border-gray-900 py-2 px-6 rounded-2xl m-2 text-white hover:bg-indigo-400 hover:text-black '
						type='reset'
					/>
				</div>
			</form>
		</div>
	);
};
export default FormApp;
