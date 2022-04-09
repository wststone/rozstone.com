const ImageGroup = ({ children }) => {
	return (
		<div role="img" className="flex space-x-6 justify-center my-1">
			{children}
		</div>
	);
};

export default ImageGroup;
