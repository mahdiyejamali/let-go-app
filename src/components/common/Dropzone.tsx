import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

interface IProps {
	onChange: (files: Array<File>) => any;
}

const Dropzone = (props: IProps) => {
	const handleChange = (files: Array<File>) => {
		props.onChange(files);
	};

	return <DropzoneArea onChange={handleChange} />;
};

export default Dropzone;
