import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
	const [openModal, setOpenModal] = useState(false);

	function handleDelete() {
		setOpenModal(true);
	}

	function closeModal() {
		setOpenModal(false);
	}

	return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<button className="btn" onClick={handleDelete}>
					Delete
				</button>
			</div>

			{openModal && <Modal onCancle={closeModal} />}
			{openModal && <Backdrop onPress={closeModal} />}
		</div>
	);
}

export default Todo;
