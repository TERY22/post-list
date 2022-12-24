import { getPagesArray } from '../../../utils/pages.function';
import cl from './MyPagination.module.css';

const MyPagination = ({ totalPages, page, changePage }) => {
	let pageArray = getPagesArray(totalPages);

	return (
		<div className={cl.pageWrapper}>
			{pageArray.map((p) => (
				<span
					key={p}
					onClick={() => changePage(p)}
					className={page === p ? [cl.page, cl.pageCurrent].join(' ') : cl.page}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default MyPagination;