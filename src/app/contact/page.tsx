"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.scss";
import Container from "@/components/Container/Container";
import Image from "next/image";
import { address, email, phone } from "@/data/navigation";
import Loader from "@/components/Loader/Loader";
import { toast } from "react-toastify";

const data = {
	heading: "CONTACTEZ-NOUS",
};

interface Inputs {
	name: string;
	number: string;
	emailId: string;
	message: string;
}

// Validation Functions
const validateName = (name: string) => {
	const pattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
	return pattern.test(name) && name.length >= 3;
};

const validateEmail = (email: string) => {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return emailRegex.test(email);
};

const validatePhoneNumber = (number: string) => {
	const phoneRegex = /^\d{10,12}$/;
	return phoneRegex.test(number);
};

const validateMessage = (message: string) => {
	return message.length > 0;
};

const Contact = () => {
	const [inputs, setInputs] = useState<Inputs>({
		name: "",
		number: "",
		emailId: "",
		message: "",
	});

	const [errors, setErrors] = useState<Partial<Inputs>>({});
	const [uploading, setUploading] = useState(false);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

		validateField(name, value);
	};

	const validateField = (name: string, value: string) => {
		let error = "";
		switch (name) {
			case "name":
				if (!validateName(value)) {
					error = "Invalid name. Please enter a valid name.";
				}
				break;
			case "number":
				if (!validatePhoneNumber(value)) {
					error = "Invalid phone number. Must be 10-12 digits.";
				}
				break;
			case "emailId":
				if (!validateEmail(value)) {
					error = "Invalid email address.";
				}
				break;
			case "message":
				if (!validateMessage(value)) {
					error = "Please write a message";
				}
				break;
			default:
				break;
		}

		setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const nameError = !validateName(inputs.name)
			? "Invalid name. Please enter a valid name."
			: "";
		const numberError = !validatePhoneNumber(inputs.number)
			? "Invalid phone number. Must be 10-12 digits."
			: "";
		const emailError = !validateEmail(inputs.emailId)
			? "Invalid email address."
			: "";
		const messageError = !validateMessage(inputs.message)
			? "Please write a message"
			: "";

		setErrors({
			name: nameError,
			number: numberError,
			emailId: emailError,
			message: messageError,
		});

		if (nameError || numberError || emailError || messageError) {
			return;
		}

		const url = `${process.env.NEXT_PUBLIC_API}/services/contact-us`;
		setUploading(true);
		fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
			},
			body: JSON.stringify(inputs),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) throw new Error(res.message);
				setInputs({ name: "", number: "", emailId: "", message: "" });
				toast.success(res.message);
			})
			.catch((err) => {
				toast.error(err.message);
			})
			.finally(() => setUploading(false));
	};

	return (
		<>
			<div className={styles.iframe}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.561027560374!2d15.299146400000001!3d-4.30507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33ad477ec485%3A0xeba82966c64fe33!2sProjet%20de%20Renforcement%20des%20Infrastructures%20Socio-Economiques%20dans%20la%20zone%20Centre%20de%20la%20RDC!5e0!3m2!1sen!2sin!4v1721113994812!5m2!1sen!2sin"
					style={{ border: 0 }}
					loading="lazy"
					width="0"
					height="0"
				></iframe>
			</div>

			<Container className={styles.content}>
				<h1>{data.heading}</h1>

				<div className={styles.details}>
					<div className={styles.image}>
						<Image
							src="/home/blogs/blog6.webp"
							width={415}
							height={400}
							alt="contact"
						/>
					</div>

					<div className={styles.contact}>
						<div className={styles.address}>
							<h3>Adresse physique</h3>

							<p>{address}</p>
						</div>

						<div className={styles.phone}>
							<h3>Téléphone</h3>

							<div className={styles.info}>
								{phone.map((item) => {
									return (
										<div key={item}>
											<a
												data-type="link"
												href={`tel:${item}`}
											>
												{item}
											</a>
										</div>
									);
								})}
							</div>
						</div>

						<div className={styles.email}>
							<h3>Adresse e-mail</h3>

							<div className={styles.info}>
								{email.map((item) => {
									return (
										<div key={item}>
											<a
												data-type="link"
												href={`mailto:${item}`}
											>
												{item}
											</a>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.input}>
							<input
								name="name"
								type="text"
								placeholder="Name"
								value={inputs.name || ""}
								onChange={handleChange}
								disabled={uploading}
							/>
							{errors.name && (
								<p className="error">{errors.name}</p>
							)}
						</div>
						<div className={styles.input}>
							<input
								name="number"
								type="text"
								placeholder="Phone"
								value={inputs.number || ""}
								onChange={handleChange}
								disabled={uploading}
							/>
							{errors.number && (
								<p className="error">{errors.number}</p>
							)}
						</div>
						<div className={styles.input}>
							<input
								name="emailId"
								type="text"
								placeholder="Email"
								value={inputs.emailId || ""}
								onChange={handleChange}
								disabled={uploading}
							/>
							{errors.emailId && (
								<p className="error">{errors.emailId}</p>
							)}
						</div>
						<div className={styles.input}>
							<textarea
								name="message"
								placeholder="Message"
								value={inputs.message || ""}
								onChange={handleChange}
								disabled={uploading}
							/>
							{errors.message && (
								<p className="error">{errors.message}</p>
							)}
						</div>

						<div className={styles.action}>
							<button
								type="submit"
								data-type="button"
								data-variant="primary"
								disabled={uploading}
								data-load={uploading}
							>
								{uploading ? (
									<Loader variant="small" />
								) : (
									"Submit"
								)}
							</button>
						</div>
					</form>
				</div>
			</Container>
		</>
	);
};

export default Contact;
