function Modal(props) {
	function closeByBtns() {
		props.onCancle();
	}

	return (
		<div className="modal">
			<p>Are you Sure?</p>
			<button className="btn btn--alt" onClick={closeByBtns}>
				Cancle
			</button>
			<button className="btn" onClick={closeByBtns}>
				Delete
			</button>
		</div>
	);
}

export default Modal;
