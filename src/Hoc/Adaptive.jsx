import { useResize } from '../hooks/use-resize';

export const Adaptive = ({ children, sizeScreen }) => {
	const sizesScreen = useResize();
	const sizes = {
		sm: sizesScreen.isScreenSm,
		md: sizesScreen.isScreenMd,
		lg: sizesScreen.isScreenLg,
		xl: sizesScreen.isScreenXl,
		xxl: sizesScreen.isScreenXxl,
	};
	return sizes[sizeScreen] ? children : '';
};
