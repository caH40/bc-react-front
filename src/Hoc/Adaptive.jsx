import { useResize } from '../hooks/use-resize';

export const Adaptive = ({ children, sizeScreen }) => {
	const {
		isScreenSm: sm,
		isScreenMd: md,
		isScreenLg: lg,
		isScreenXl: xl,
		isScreenXXl: xxl,
	} = useResize();
	const sizes = { sm, md, lg, xl, xxl };
	return sizes[sizeScreen] ? children : '';
};
