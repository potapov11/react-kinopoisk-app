import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import style from './style.css';
// import useOnClickOutside from '../../hooks/useOnClickOutside';

function FormModal() {
	const [openedFormModal, setOpenedFormModal] = useState(false);

	function checkClick(e) {
		const target = e.target;
		if (!target.closest('form')) {
			setOpenedFormModal(false);
		}
	}

	useEffect(() => {
		let timer = setTimeout(() => {
			setOpenedFormModal(true);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		openedFormModal && (
			<div className="wrapper-modal" onClick={(e) => checkClick(e)}>
				<div className="close" onClick={() => setOpenedFormModal(false)}></div>
				<Form />
			</div>
		)
	);
}

export default FormModal;
