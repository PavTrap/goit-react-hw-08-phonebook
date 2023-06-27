import { ThreeDots } from 'react-loader-spinner';
// import { WrapperLoader } from './Loader.styled';
import css from './Loader.module.css'


export const Loader = () => {
	return (
	<div className={css.div}>
		<ThreeDots 
	height="80" 
	width="80" 
	radius="9"
	color="#212121" 
	ariaLabel="three-dots-loading"
	wrapperStyle={{}}
	wrapperClassName=""
	visible={true}
		/>
		</div>

	)
}